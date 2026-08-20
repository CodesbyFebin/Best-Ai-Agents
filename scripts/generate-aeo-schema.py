#!/usr/bin/env python3
"""Generate evidence-friendly Schema.org JSON-LD from a content payload.

Input JSON fields:
  title, url, description, content, directAnswer, datePublished, dateModified
Optional:
  faqs: [{"question": "...", "answer": "..."}]
  howTo: {"name": "...", "description": "...", "steps": [{"name": "...", "text": "..."}]}

The entity extractor is intentionally conservative. It identifies repeated capitalized
name-like phrases and emits them as schema.org/Thing rather than guessing a Person,
Place, or Organization type without authoritative entity data.
"""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path
from typing import Any
from urllib.parse import urlparse

DATE_RE = re.compile(r"^\d{4}-\d{2}-\d{2}$")
ENTITY_RE = re.compile(
    r"\b(?:[A-Z][A-Za-z0-9&.'’-]*(?:\s+|$)){1,5}",
    flags=re.UNICODE,
)
STOP_ENTITIES = {
    "A", "An", "And", "For", "How", "If", "In", "No", "The", "This", "To",
    "Use", "When", "Where", "Why", "With", "Direct Answer", "Frequently Asked Questions",
}


def word_count(value: str) -> int:
    return len([part for part in value.strip().split() if part])


def validate_https(url: str) -> None:
    parsed = urlparse(url)
    if parsed.scheme != "https" or not parsed.netloc:
        raise ValueError(f"Expected an absolute HTTPS URL, got: {url!r}")


def extract_entities(content: str, limit: int = 24) -> list[str]:
    counts: dict[str, int] = {}
    for match in ENTITY_RE.finditer(content):
        entity = " ".join(match.group(0).split()).strip(" .,:;!?()[]{}")
        if not entity or entity in STOP_ENTITIES or len(entity) < 3:
            continue
        if entity.lower().startswith(("http", "www")):
            continue
        counts[entity] = counts.get(entity, 0) + 1

    ranked = sorted(counts, key=lambda value: (-counts[value], value.lower()))
    return ranked[:limit]


def build_schema(payload: dict[str, Any]) -> dict[str, Any]:
    required = [
        "title", "url", "description", "content", "directAnswer",
        "datePublished", "dateModified",
    ]
    missing = [key for key in required if not str(payload.get(key, "")).strip()]
    if missing:
        raise ValueError(f"Missing required fields: {', '.join(missing)}")

    validate_https(str(payload["url"]))
    for key in ("datePublished", "dateModified"):
        if not DATE_RE.match(str(payload[key])):
            raise ValueError(f"{key} must use YYYY-MM-DD")

    direct_answer_words = word_count(str(payload["directAnswer"]))
    if not 40 <= direct_answer_words <= 60:
        raise ValueError(
            f"directAnswer must contain 40-60 words; got {direct_answer_words}"
        )

    entities = extract_entities(str(payload["content"]))
    graph: list[dict[str, Any]] = [
        {
            "@type": "WebPage",
            "@id": f"{payload['url']}#webpage",
            "url": payload["url"],
            "name": payload["title"],
            "description": payload["description"],
            "datePublished": payload["datePublished"],
            "dateModified": payload["dateModified"],
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": [".aeoDirectAnswer"],
            },
            "about": [{"@type": "Thing", "name": entity} for entity in entities],
        }
    ]

    faqs = payload.get("faqs") or []
    if faqs:
        graph.append(
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": faq["question"],
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq["answer"],
                        },
                    }
                    for faq in faqs
                ],
            }
        )

    how_to = payload.get("howTo") or {}
    steps = how_to.get("steps") or []
    if steps:
        graph.append(
            {
                "@type": "HowTo",
                "name": how_to["name"],
                "description": how_to.get("description", ""),
                "step": [
                    {
                        "@type": "HowToStep",
                        "position": index,
                        "name": step["name"],
                        "text": step["text"],
                    }
                    for index, step in enumerate(steps, start=1)
                ],
            }
        )

    return {"@context": "https://schema.org", "@graph": graph}


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("input", type=Path, help="JSON content payload")
    parser.add_argument("--output", "-o", type=Path, help="Write JSON-LD to this file")
    args = parser.parse_args()

    payload = json.loads(args.input.read_text(encoding="utf-8"))
    schema = build_schema(payload)
    rendered = json.dumps(schema, indent=2, ensure_ascii=False) + "\n"

    if args.output:
        args.output.write_text(rendered, encoding="utf-8")
    else:
        print(rendered, end="")


if __name__ == "__main__":
    main()
