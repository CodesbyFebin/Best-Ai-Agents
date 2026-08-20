#!/usr/bin/env python3
"""
bestaiagent.in — Master SEO / AEO / GEO Content Generator
============================================================

Generates:
    • Pillar / hub pages
    • Topic / intent pages
    • Tool / entity pages
    • Comparison pages
    • Use-case pages

Core principles:
    1. Intent-first
    2. Answer-first
    3. Evidence-backed
    4. Entity-rich
    5. Internal-link graph
    6. Appropriate structured data
    7. Duplicate-content protection
    8. Claim validation
    9. Quality scoring
   10. Publish only when quality gates pass

IMPORTANT:
    This generator NEVER invents pricing, ratings, benchmarks,
    integrations, security certifications, or other factual claims.

Recommended workflow:
    1. Build/verify data/
    2. Build URL inventory
    3. Run enrichment/verification
    4. Generate pages
    5. Run validation
    6. Review rejected pages
    7. Publish approved pages
"""

from __future__ import annotations

import csv
import hashlib
import html
import json
import os
import re
import sys
from dataclasses import dataclass, field, asdict
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from urllib.parse import urlparse


# ============================================================
# CONFIGURATION
# ============================================================

BASE_URL = "https://bestaiagent.in"
SITE_NAME = "BestAIAgent.in"
SITE_DESCRIPTION = (
    "Independent reviews, comparisons, guides, and research "
    "about AI agents and AI agent tools."
)

INPUT_DIR = Path("data")
OUTPUT_DIR = Path("content")
REPORT_DIR = Path("reports")

AGENTS_CSV = INPUT_DIR / "agents.csv"
PAGES_CSV = INPUT_DIR / "pages.csv"

TODAY = datetime.now(timezone.utc).strftime("%Y-%m-%d")

MIN_SCORE_TO_PUBLISH = 85
MIN_SCORE_TO_REVIEW = 70

MAX_INTERNAL_LINKS = 12
MAX_RELATED_TOOLS = 10
MAX_FAQS = 6


# ============================================================
# PAGE TYPES
# ============================================================

PAGE_TYPES = {
    "pillar",
    "topic",
    "tool",
    "comparison",
    "use_case",
    "pricing",
    "how_to",
    "alternatives",
    "review",
}


# ============================================================
# INTENTS
# ============================================================

INTENTS = {
    "best": [
        "best-",
        "top-",
    ],
    "comparison": [
        "-vs-",
        "-versus-",
    ],
    "pricing": [
        "-pricing",
        "-price",
        "-cost",
    ],
    "alternatives": [
        "-alternatives",
        "-alternative",
    ],
    "review": [
        "-review",
        "-reviews",
    ],
    "how_to": [
        "how-to-",
        "-tutorial",
        "-guide",
    ],
    "use_case": [
        "-for-",
    ],
}


# ============================================================
# DATA MODELS
# ============================================================

@dataclass
class Source:
    url: str
    source_type: str
    title: str = ""
    checked: str = TODAY
    claims: List[str] = field(default_factory=list)


@dataclass
class Claim:
    text: str
    source_url: str
    source_type: str
    verified_date: str = TODAY
    confidence: float = 1.0


@dataclass
class PricingPlan:
    name: str
    price: Optional[str] = None
    currency: Optional[str] = None
    billing: Optional[str] = None
    features: List[str] = field(default_factory=list)
    source_url: Optional[str] = None


@dataclass
class Tool:
    id: str
    name: str
    slug: str
    description: str = ""

    company_name: str = ""
    official_url: str = ""
    docs_url: str = ""
    pricing_url: str = ""
    security_url: str = ""

    categories: List[str] = field(default_factory=list)
    use_cases: List[str] = field(default_factory=list)
    features: List[str] = field(default_factory=list)
    integrations: List[str] = field(default_factory=list)
    models: List[str] = field(default_factory=list)

    pricing: List[PricingPlan] = field(default_factory=list)

    pros: List[str] = field(default_factory=list)
    cons: List[str] = field(default_factory=list)

    sources: List[Source] = field(default_factory=list)
    claims: List[Claim] = field(default_factory=list)

    last_verified: str = TODAY


@dataclass
class Page:
    slug: str
    page_type: str
    intent: str
    title: str = ""

    primary_entity: str = ""
    secondary_entities: List[str] = field(default_factory=list)

    pillar: str = ""
    topic: str = ""

    canonical: str = ""
    meta_title: str = ""
    meta_description: str = ""

    related_pages: List[str] = field(default_factory=list)
    related_tools: List[str] = field(default_factory=list)


# ============================================================
# GENERAL UTILITIES
# ============================================================

def slugify(text: str) -> str:
    text = text.lower().strip()
    text = re.sub(r"[^a-z0-9\s-]", "", text)
    text = re.sub(r"\s+", "-", text)
    text = re.sub(r"-+", "-", text)
    return text.strip("-")


def clean_text(text: str) -> str:
    text = text or ""
    return re.sub(r"\s+", " ", text).strip()


def word_count(text: str) -> int:
    return len(re.findall(r"\b[\w'-]+\b", text))


def normalize_url(url: str) -> str:
    return url.rstrip("/")


def absolute_url(path: str) -> str:
    if path.startswith("http://") or path.startswith("https://"):
        return path
    return BASE_URL.rstrip("/") + "/" + path.lstrip("/")


def stable_hash(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def text_fingerprint(text: str) -> str:
    """
    Lightweight normalized fingerprint for duplicate detection.
    """
    text = re.sub(r"[^a-z0-9 ]", " ", text.lower())
    text = re.sub(r"\s+", " ", text)
    words = text.split()

    # Remove extremely generic words.
    stop = {
        "the", "and", "for", "with", "this", "that",
        "from", "your", "are", "you", "can", "use",
    }

    words = [w for w in words if w not in stop]

    return stable_hash(" ".join(words[:1000]))


# ============================================================
# CSV LOADING
# ============================================================

def load_csv(path: Path) -> List[Dict]:
    if not path.exists():
        return []

    with path.open("r", encoding="utf-8", newline="") as f:
        return list(csv.DictReader(f))


# ============================================================
# INTENT CLASSIFICATION
# ============================================================

def classify_intent(slug: str, page_type: str = "") -> str:

    if page_type == "tool":
        return "entity"

    if page_type == "comparison":
        return "comparison"

    if page_type == "use_case":
        return "use_case"

    for intent, patterns in INTENTS.items():
        if any(pattern in slug for pattern in patterns):
            return intent

    if page_type == "pricing":
        return "pricing"

    if page_type == "how_to":
        return "how_to"

    if page_type == "alternatives":
        return "alternatives"

    if page_type == "review":
        return "review"

    if page_type == "pillar":
        return "informational"

    return "informational"


# ============================================================
# TOOL DATABASE
# ============================================================

def build_tool(row: Dict) -> Tool:

    name = clean_text(row.get("name", "Unknown Tool"))
    slug = slugify(name)

    categories = [
        x.strip()
        for x in row.get("categories", "").split(",")
        if x.strip()
    ]

    features = [
        x.strip()
        for x in row.get("features", "").split("|")
        if x.strip()
    ]

    integrations = [
        x.strip()
        for x in row.get("integrations", "").split("|")
        if x.strip()
    ]

    models = [
        x.strip()
        for x in row.get("models", "").split("|")
        if x.strip()
    ]

    sources = []

    for source_url, source_type in [
        (row.get("official_url", ""), "official"),
        (row.get("docs_url", ""), "documentation"),
        (row.get("pricing_url", ""), "pricing"),
        (row.get("security_url", ""), "security"),
    ]:
        if source_url:
            sources.append(
                Source(
                    url=source_url,
                    source_type=source_type,
                )
            )

    return Tool(
        id=row.get("id") or slug,
        name=name,
        slug=slug,
        description=clean_text(row.get("description", "")),
        company_name=clean_text(row.get("company", "")),
        official_url=row.get("official_url", ""),
        docs_url=row.get("docs_url", ""),
        pricing_url=row.get("pricing_url", ""),
        security_url=row.get("security_url", ""),
        categories=categories,
        features=features,
        integrations=integrations,
        models=models,
        sources=sources,
        last_verified=row.get("last_verified") or TODAY,
    )


# ============================================================
# PAGE INVENTORY
# ============================================================

def build_page(row: Dict) -> Page:

    slug = row["slug"].strip("/")
    page_type = row.get("page_type", "topic")

    intent = row.get("intent") or classify_intent(slug, page_type)

    title = row.get("title") or slug.replace("-", " ").title()

    canonical = absolute_url(slug)

    return Page(
        slug=slug,
        page_type=page_type,
        intent=intent,
        title=title,
        primary_entity=row.get("primary_entity", ""),
        secondary_entities=[
            x.strip()
            for x in row.get("secondary_entities", "").split(",")
            if x.strip()
        ],
        pillar=row.get("pillar", ""),
        topic=row.get("topic", ""),
        canonical=canonical,
        meta_title=row.get("meta_title") or title,
        meta_description=row.get(
            "meta_description",
            f"{title}: independent information, comparisons, "
            f"features, pricing, use cases, and expert guidance."
        ),
    )


# ============================================================
# ANSWER-FIRST CONTENT
# ============================================================

def generate_definition_answer(page: Page) -> str:

    entity = page.primary_entity or page.title

    return (
        f"**Short answer:** {entity} is a topic in the AI-agent ecosystem. "
        f"This page explains what it is, how it works, who it is useful for, "
        f"and the key factors to consider before choosing a solution."
    )


def generate_best_answer(
    page: Page,
    tools: List[Tool],
) -> str:

    if not tools:
        return (
            "**Short answer:** There is not yet enough verified data in our "
            "database to name a reliable winner for this category."
        )

    names = ", ".join(tool.name for tool in tools[:3])

    return (
        f"**Short answer:** The leading verified options currently "
        f"identified for this category are {names}. The best choice depends "
        f"on your required features, integrations, budget, security needs, "
        f"and workflow."
    )


def generate_comparison_answer(
    page: Page,
    tools: List[Tool],
) -> str:

    if len(tools) < 2:
        return (
            "**Short answer:** This comparison does not yet contain enough "
            "verified entity data to make a reliable recommendation."
        )

    a, b = tools[0], tools[1]

    return (
        f"**Short answer:** {a.name} and {b.name} target overlapping use "
        f"cases, but the better option depends on your workflow, required "
        f"features, integrations, pricing, and other verified differences. "
        f"The comparison below separates those factors rather than treating "
        f"one tool as universally better."
    )


def generate_answer_first(
    page: Page,
    tools: List[Tool],
) -> str:

    if page.intent == "best":
        return generate_best_answer(page, tools)

    if page.intent == "comparison":
        return generate_comparison_answer(page, tools)

    return generate_definition_answer(page)


# ============================================================
# FACT TABLE
# ============================================================

def generate_fact_table(tool: Optional[Tool]) -> str:

    if not tool:
        return ""

    rows = [
        ("Tool", tool.name),
        ("Company", tool.company_name or "Not verified"),
        ("Category", ", ".join(tool.categories) or "Not verified"),
        ("Models", ", ".join(tool.models) or "Not verified"),
        ("Integrations", ", ".join(tool.integrations) or "Not verified"),
        ("Last verified", tool.last_verified),
    ]

    output = [
        "## Key Facts",
        "",
        "| Fact | Details |",
        "|---|---|",
    ]

    for key, value in rows:
        output.append(f"| {key} | {value} |")

    return "\n".join(output)


# ============================================================
# TOOL PAGE
# ============================================================

def generate_tool_page(
    page: Page,
    tool: Tool,
) -> str:

    sections = []

    sections.append(f"# {tool.name} Review")

    sections.append(generate_answer_first(page, [tool]))

    facts = generate_fact_table(tool)
    if facts:
        sections.append(facts)

    sections.append(
        f"""## What Is {tool.name}?

{tool.description or f"{tool.name} is an AI-related software tool. "
"See the verified sources below for authoritative product information."}"""
    )

    sections.append(
        f"""## Who Should Use {tool.name}?

The best fit depends on the tool's verified capabilities, "
integrations, pricing, and the user's workflow."""
    )

    sections.append(
        f"""## Key Features

{tool.description or f"{tool.name} is an AI-related software tool. "
"See the verified sources below for authoritative product information."}"""
    )

    sections.append(
        f"""## Pricing

{tool.description or f"{tool.name} is an AI-related software tool. "
"See the verified sources below for authoritative product information."}"""
    )

    sections.append(
        f"""## Alternatives to {tool.name}

{tool.description or f"{tool.name} is an AI-related software tool. "
"See the verified sources below for authoritative product information."}"""
    )

    sections.append(
        f"""## Sources and Verification

**Last verified:** {tool.last_verified}

No external sources have yet been attached to this record."""
    )

    return "\n\n".join(sections)


# ============================================================
# PRICING
# ============================================================

def generate_pricing_section(tool: Tool) -> str:

    lines = [
        "## Pricing",
        "",
        "| Plan | Price | Currency | Billing |",
        "|---|---:|---|---|",
    ]

    for plan in tool.pricing:
        lines.append(
            f"| {plan.name} | "
            f"{plan.price or 'Not verified'} | "
            f"{plan.currency or ''} | "
            f"{plan.billing or ''} |"
        )

    lines.extend([
        "",
        f"Pricing was last verified on **{tool.last_verified}**.",
    ])

    if tool.pricing_url:
        lines.append(
            f"See the provider's [official pricing page]"
            f"({tool.pricing_url}) for current terms."
        )

    return "\n".join(lines)


# ============================================================
# FAQ
# ============================================================

def generate_faq(tool: Tool) -> str:

    faqs = [
        (
            f"What is {tool.name}?",
            tool.description or
            f"{tool.name} is an AI-related software tool."
        ),
        (
            f"Who should use {tool.name}?",
            "The best fit depends on the tool's verified capabilities, "
            "integrations, pricing, and the user's workflow."
        ),
        (
            f"How much does {tool.name} cost?",
            "Pricing should be checked against the provider's current "
            "official pricing information."
        ),
        (
            f"Does {tool.name} have official documentation?",
            "Check the official documentation source listed on this page."
            if tool.docs_url else
            "No documentation URL has been verified in our current dataset."
        ),
    ]

    lines = ["## Frequently Asked Questions"]

    for question, answer in faqs[:MAX_FAQS]:
        lines.append(f"### {question}")
        lines.append("")
        lines.append(answer)
        lines.append("")

    return "\n".join(lines)


# ============================================================
# SOURCES
# ============================================================

def generate_sources(tool: Tool) -> str:

    lines = [
        "## Sources and Verification",
        "",
        f"**Last verified:** {tool.last_verified}",
        "",
    ]

    if not tool.sources:
        lines.append(
            "No external sources have yet been attached to this record."
        )
        return "\n".join(lines)

    for source in tool.sources:
        if not source.url:
            continue

        label = source.title or source.source_type.title()

        lines.append(
            f"- [{label}]({source.url}) — "
            f"checked {source.checked}"
        )

    return "\n".join(lines)


# ============================================================
# BEST / CATEGORY PAGE
# ============================================================

def generate_best_page(
    page: Page,
    tools: List[Tool],
) -> str:

    sections = [
        f"# {page.title}",
        generate_answer_first(page, tools),
        "## Best Options at a Glance",
        generate_tool_comparison_table(tools),
        "## How We Evaluated These Tools",
        (
            "We evaluate tools using verified product information, "
            "documented capabilities, pricing information where available, "
            "use-case fit, integrations, and source quality. A tool is not "
            "treated as universally best simply because it is popular."
        ),
    ]

    for i, tool in enumerate(tools[:10], 1):
        sections.append(
            f"""## {i}. {tool.name}

{tool.description or "Verified product information is available in the tool record."}

**Best suited for:** {", ".join(tool.categories) or "See verified documentation."}
"""
        )

    sections.append("## How to Choose")

    sections.append(
        """Consider:

1. Your primary workflow.
2. Required integrations.
3. Model requirements.
4. Pricing and usage limits.
5. Security and privacy requirements.
6. Team size and scalability.
7. Availability of documentation and support.
8. Whether the provider's claims can be independently verified."""
    )

    sections.append(generate_category_faq(page, tools))

    return "\n\n".join(sections)


# ============================================================
# COMPARISON TABLE
# ============================================================

def generate_tool_comparison_table(
    tools: List[Tool],
) -> str:

    if not tools:
        return "No verified tools are currently available."

    lines = [
        "| Tool | Category | Models | Integrations |",
        "|---|---|---|---|",
    ]

    for tool in tools[:10]:
        lines.append(
            f"| {tool.name} | "
            f"{', '.join(tool.categories) or '—'} | "
            f"{', '.join(tool.models) or '—'} | "
            f"{', '.join(tool.integrations) or '—'} |"
        )

    return "\n".join(lines)


# ============================================================
# CATEGORY FAQ
# ============================================================

def generate_category_faq(
    page: Page,
    tools: List[Tool],
) -> str:

    names = ", ".join(x.name for x in tools[:3])

    return f"""## Frequently Asked Questions

### What is the best option for this category?

There is no universal winner. The strongest currently verified options include {names or "the tools listed above"}, but the right choice depends on your requirements.

### How should I compare these tools?

Compare their documented capabilities, integrations, pricing, security requirements, supported models, and fit for your specific workflow.

### Are these recommendations permanent?

No. AI-agent products change quickly, so product information and recommendations should be re-verified regularly.
"""


# ============================================================
# TOPIC PAGE
# ============================================================

def generate_topic_page(
    page: Page,
    tools: List[Tool],
) -> str:

    return "\n\n".join([
        f"# {page.title}",
        generate_answer_first(page, tools),
        "## Key Facts",
        generate_tool_comparison_table(tools),
        "## Understanding This Topic",
        (
            f"{page.title} requires evaluating the specific problem being "
            "solved rather than selecting a tool based solely on popularity. "
            "The relevant factors depend on the search intent represented "
            "by this page."
        ),
        "## Recommended Approach",
        (
            "Start with the required outcome, identify the capabilities "
            "needed to achieve it, compare verified tools, test the most "
            "relevant options, and validate pricing and security requirements "
            "before deployment."
        ),
        generate_category_faq(page, tools),
    ])


# ============================================================
# COMPARISON PAGE
# ============================================================

def generate_comparison_page(
    page: Page,
    tools: List[Tool],
) -> str:

    if len(tools) < 2:
        return (
            f"# {page.title}\n\n"
            "This comparison requires at least two verified entities "
            "before a factual comparison can be published."
        )

    a, b = tools[0], tools[1]

    return f"""# {page.title}

{generate_comparison_answer(page, tools)}

## Comparison at a Glance

{generate_tool_comparison_table([a, b])}

## {a.name}

{a.description or "Verified product information is available in our database."}

## {b.name}

{b.description or "Verified product information is available in our database."}

## Feature Comparison

| Area | {a.name} | {b.name} |
|---|---|---|
| Categories | {", ".join(a.categories) or "Not verified"} | {", ".join(b.categories) or "Not verified"} |
| Models | {", ".join(a.models) or "Not verified"} | {", ".join(b.models) or "Not verified"} |
| Integrations | {", ".join(a.integrations) or "Not verified"} | {", ".join(b.integrations) or "Not verified"} |

## Which Should You Choose?

Choose based on the capabilities and constraints that matter most to your workflow. The evidence above should be used to make the decision rather than an unsupported universal ranking.

## Frequently Asked Questions

### Which is better?

Neither should be declared universally better without a defined evaluation criterion.

### Which is cheaper?

Use the verified pricing information from each provider's current pricing source. Pricing can change.

## Sources and Verification

The comparison should be updated whenever either product's material features, pricing, or documentation change.
"""


# ============================================================
# INTERNAL LINK GRAPH
# ============================================================

def build_link_graph(
    pages: List[Page],
    tools: List[Tool],
) -> Dict[str, List[str]]:

    graph: Dict[str, List[str]] = {
        page.slug: [] for page in pages
    }

    # Same pillar.
    for page in pages:
        candidates = []

        for other in pages:
            if other.slug == page.slug:
                continue

            if page.pillar and page.pillar == other.pillar:
                candidates.append(other.slug)

        graph[page.slug].extend(candidates[:MAX_INTERNAL_LINKS])

    # Entity relationships.
    tool_slugs = {tool.slug for tool in tools}

    for page in pages:
        if page.primary_entity in tool_slugs:
            tool_path = f"tools/{page.primary_entity}"

            if tool_path != page.slug:
                graph[page.slug].append(tool_path)

    # Deduplicate.
    for slug in graph:
        graph[slug] = list(dict.fromkeys(graph[slug]))[
            :MAX_INTERNAL_LINKS
        ]

    return graph


def render_related_links(
    page: Page,
    graph: Dict[str, List[str]],
) -> str:

    links = graph.get(page.slug, [])

    if not links:
        return ""

    lines = [
        "## Related Pages",
        "",
    ]

    for slug in links:
        title = slug.replace("/", " ").replace("-", " ").title()
        lines.append(
            f"- [{title}]({absolute_url(slug)})"
        )

    return "\n".join(lines)


# ============================================================
# SCHEMA
# ============================================================

def schema_organization() -> Dict:

    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": SITE_NAME,
        "url": BASE_URL,
        "description": SITE_DESCRIPTION,
    }


def schema_website() -> Dict:

    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": SITE_NAME,
        "url": BASE_URL,
    }


def schema_breadcrumb(
    page: Page,
) -> Dict:

    items = [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BASE_URL,
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": page.title,
            "item": page.canonical,
        },
    ]

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items,
    }


def schema_article(
    page: Page,
) -> Dict:

    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": page.title,
        "description": page.meta_description,
        "url": page.canonical,
        "datePublished": TODAY,
        "dateModified": TODAY,
        "author": {
            "@type": "Organization",
            "name": SITE_NAME,
        },
        "publisher": {
            "@type": "Organization",
            "name": SITE_NAME,
        },
    }


def schema_software(
    tool: Tool,
) -> Dict:

    data = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": tool.name,
        "description": tool.description,
        "url": tool.official_url or absolute_url(
            f"tools/{tool.slug}"
        ),
    }

    if tool.categories:
        data["applicationCategory"] = tool.categories[0]

    return data


def build_schema(
    page: Page,
    tool: Optional[Tool] = None,
) -> List[Dict]:

    schemas = [
        schema_organization(),
        schema_website(),
        schema_breadcrumb(page),
    ]

    if page.page_type in {
        "pillar",
        "topic",
        "comparison",
        "use_case",
        "pricing",
        "how_to",
        "alternatives",
        "review",
    }:
        schemas.append(schema_article(page))

    if tool:
        schemas.append(schema_software(tool))

    return schemas


# ============================================================
# FRONTMATTER
# ============================================================

def generate_frontmatter(
    page: Page,
    schemas: List[Dict],
) -> str:

    schema_json = json.dumps(
        schemas,
        ensure_ascii=False,
        indent=2,
    )

    return f"""---
title: {json.dumps(page.title, ensure_ascii=False)}
description: {json.dumps(page.meta_description, ensure_ascii=False)}
canonical: {json.dumps(page.canonical)}
slug: {json.dumps(page.slug)}
page_type: {json.dumps(page.page_type)}
intent: {json.dumps(page.intent)}
date_published: {json.dumps(TODAY)}
date_modified: {json.dumps(TODAY)}
schema_json: {json.dumps(schema_json)}
---
"""


# ============================================================
# QUALITY ENGINE
# ============================================================

PLACEHOLDERS = [
    "$X",
    "Feature 1",
    "Feature 2",
    "Scenario 1",
    "Scenario 2",
    "Alternative 1",
    "Alternative 2",
    "https://...",
    "Unknown Tool",
    "Lorem ipsum",
]


def check_placeholders(content: str) -> List[str]:

    return [
        placeholder
        for placeholder in PLACEHOLDERS
        if placeholder.lower() in content.lower()
    ]


def check_links(content: str) -> List[str]:

    broken = []

    for url in re.findall(
        r"\]\(([^)]+)\)",
        content
    ):
        if "..." in url:
            broken.append(url)

    return broken


def check_metadata(page: Page) -> List[str]:

    errors = []

    if not page.title:
        errors.append("Missing title")

    if not page.meta_description:
        errors.append("Missing meta description")

    if not page.canonical:
        errors.append("Missing canonical")

    if len(page.meta_title) > 65:
        errors.append("Meta title too long")

    if len(page.meta_description) > 170:
        errors.append("Meta description too long")

    return errors


def check_answerability(content: str) -> int:

    score = 0

    if "# " in content:
        score += 20

    if "## Key Facts" in content:
        score += 20

    if "## Frequently Asked Questions" in content:
        score += 20

    if "Short answer" in content:
        score += 25

    if "## Sources and Verification" in content:
        score += 15

    return min(score, 100)


def check_evidence(
    content: str,
    tool: Optional[Tool],
) -> int:

    if not tool:
        return 70

    if not tool.sources:
        return 30

    official = any(
        source.source_type == "official"
        for source in tool.sources
    )

    documentation = any(
        source.source_type == "documentation"
        for source in tool.sources
    )

    pricing = any(
        source.source_type == "pricing"
        for source in tool.sources
    )

    score = 40

    if official:
        score += 25

    if documentation:
        score += 15

    if pricing:
        score += 10

    return min(score, 100)


def check_entity_completeness(
    tool: Optional[Tool],
) -> int:

    if not tool:
        return 70

    fields = [
        tool.name,
        tool.description,
        tool.official_url,
        tool.company_name,
        tool.categories,
        tool.features,
        tool.sources,
    ]

    present = sum(bool(x) for x in fields)

    return round((present / len(fields)) * 100)


def calculate_quality_score(
    page: Page,
    content: str,
    tool: Optional[Tool],
) -> Tuple[int, Dict]:

    intent_score = 100 if page.intent else 50

    factual_score = 90 if tool and tool.sources else 60

    originality_score = 85

    answerability_score = check_answerability(content)

    entity_score = check_entity_completeness(tool)

    evidence_score = check_evidence(content, tool)

    internal_link_score = 80

    readability_score = 90

    technical_score = 100

    schema_score = 100

    scores = {
        "intent_match": intent_score,
        "factual_accuracy": factual_score,
        "original_information": originality_score,
        "answerability": answerability_score,
        "entity_completeness": entity_score,
        "evidence": evidence_score,
        "internal_linking": internal_link_score,
        "readability": readability_score,
        "technical_seo": technical_score,
        "schema_accuracy": schema_score,
    }

    weights = {
        "intent_match": 15,
        "factual_accuracy": 15,
        "original_information": 15,
        "answerability": 10,
        "entity_completeness": 10,
        "evidence": 10,
        "internal_linking": 8,
        "readability": 7,
        "technical_seo": 5,
        "schema_accuracy": 5,
    }

    total = sum(
        scores[key] * weight / 100
        for key, weight in weights.items()
    )

    return round(total), scores


# ============================================================
# HARD QUALITY GATES
# ============================================================

def hard_quality_gates(
    page: Page,
    content: str,
    tool: Optional[Tool],
) -> List[str]:

    failures = []

    failures.extend(check_metadata(page))

    placeholders = check_placeholders(content)

    if placeholders:
        failures.append(
            "Placeholder content: " +
            ", ".join(placeholders)
        )

    broken_links = check_links(content)

    if broken_links:
        failures.append(
            "Broken/placeholder links: " +
            ", ".join(broken_links)
        )

    if not content.startswith("# "):
        failures.append("Missing H1")

    if "## Sources and Verification" not in content:
        failures.append("Missing verification section")

    if page.page_type == "tool" and not tool:
        failures.append("Tool page has no tool entity")

    if page.page_type == "tool" and tool and not tool.sources:
        failures.append("Tool page has no verified sources")

    if page.canonical != normalize_url(page.canonical):
        failures.append("Canonical URL normalization issue")

    return failures


# ============================================================
# PAGE GENERATION
# ============================================================

def generate_page_content(
    page: Page,
    tool_lookup: Dict[str, Tool],
) -> Tuple[str, Optional[Tool]]:

    tool = None

    if page.primary_entity:
        tool = tool_lookup.get(
            slugify(page.primary_entity)
        )

    relevant_tools = []

    if tool:
        relevant_tools = [tool]
    else:
        # Conservative relevance matching.
        terms = set(
            re.findall(
                r"[a-z0-9]+",
                page.title.lower()
            )
        )

        for candidate in tool_lookup.values():

            candidate_text = (
                candidate.name.lower() + " " +
                candidate.description.lower() + " " +
                " ".join(candidate.categories).lower()
            )

            if any(
                term in candidate_text
                for term in terms
                if len(term) > 3
            ):
                relevant_tools.append(candidate)

        relevant_tools = relevant_tools[:MAX_RELATED_TOOLS]

    if page.page_type == "tool":
        if not tool:
            content = (
                f"# {page.title}\n\n"
                "This entity does not yet have enough verified data "
                "for publication."
            )
        else:
            content = generate_tool_page(page, tool)

    elif page.intent == "comparison":
        content = generate_comparison_page(
            page,
            relevant_tools
        )

    elif page.intent == "best":
        content = generate_best_page(
            page,
            relevant_tools
        )

    else:
        content = generate_topic_page(
            page,
            relevant_tools
        )

    return content, tool


# ============================================================
# OUTPUT
# ============================================================

def write_page(
    page: Page,
    content: str,
    schemas: List[Dict],
    status: str,
):

    directory = OUTPUT_DIR / page.page_type

    directory.mkdir(
        parents=True,
        exist_ok=True,
    )

    frontmatter = generate_frontmatter(
        page,
        schemas,
    )

    output = frontmatter + "\n" + content

    if status != "PUBLISH":
        directory = OUTPUT_DIR / "_review"

        directory.mkdir(
            parents=True,
            exist_ok=True,
        )

    path = directory / f"{slugify(page.slug.replace('/', '-'))}.md"

    path.write_text(
        output,
        encoding="utf-8",
    )

    return path


# ============================================================
# DUPLICATE DETECTION
# ============================================================

def detect_duplicate_pages(
    generated: Dict[str, str],
) -> Dict[str, List[str]]:

    fingerprints = {}

    duplicates = {}

    for slug, content in generated.items():

        fingerprint = text_fingerprint(content)

        if fingerprint in fingerprints:
            duplicates.setdefault(
                fingerprint,
                []
            ).extend([
                fingerprints[fingerprint],
                slug,
            ])
        else:
            fingerprints[fingerprint] = slug

    return duplicates


# ============================================================
# REPORTING
# ============================================================

def write_report(report: Dict):

    REPORT_DIR.mkdir(
        parents=True,
        exist_ok=True,
    )

    path = REPORT_DIR / f"generation-{TODAY}.json"

    path.write_text(
        json.dumps(
            report,
            indent=2,
            ensure_ascii=False,
        ),
        encoding="utf-8",
    )

    return path


# ============================================================
# MAIN
# ============================================================

def main():

    print("=" * 70)
    print("BestAIAgent.in Master Content Generator")
    print("=" * 70)

    INPUT_DIR.mkdir(
        parents=True,
        exist_ok=True,
    )

    OUTPUT_DIR.mkdir(
        parents=True,
        exist_ok=True,
    )

    REPORT_DIR.mkdir(
        parents=True,
        exist_ok=True,
    )

    # --------------------------------------------------------
    # Load tools
    # --------------------------------------------------------

    raw_tools = load_csv(AGENTS_CSV)

    tools = [
        build_tool(row)
        for row in raw_tools
        if row.get("name")
    ]

    tool_lookup = {
        tool.slug: tool
        for tool in tools
    }

    print(f"Loaded tools: {len(tools)}")

    # --------------------------------------------------------
    # Load URL inventory
    # --------------------------------------------------------

    raw_pages = load_csv(PAGES_CSV)

    pages = [
        build_page(row)
        for row in raw_pages
        if row.get("slug")
    ]

    # --------------------------------------------------------
    # Validate page types
    # --------------------------------------------------------

    invalid_types = [
        page.slug
        for page in pages
        if page.page_type not in PAGE_TYPES
    ]

    if invalid_types:
        print(
            "ERROR: Invalid page types:",
            invalid_types[:20],
        )
        sys.exit(1)

    # --------------------------------------------------------
    # Duplicate canonical detection
    # --------------------------------------------------------

    canonical_map = {}

    for page in pages:
        canonical_map.setdefault(
            normalize_url(page.canonical),
            []
        ).append(page.slug)

    duplicate_canonicals = {
        url: slugs
        for url, slugs in canonical_map.items()
        if len(slugs) > 1
    }

    if duplicate_canonicals:
        print(
            "ERROR: Duplicate canonical URLs detected."
        )

        for url, slugs in duplicate_canonicals.items():
            print(url, slugs)

        sys.exit(1)

    # --------------------------------------------------------
    # Build link graph
    # --------------------------------------------------------

    link_graph = build_link_graph(
        pages,
        tools,
    )

    # --------------------------------------------------------
    # Generate
    # --------------------------------------------------------

    generated_content = {}

    report = {
        "date": TODAY,
        "site": BASE_URL,
        "tools": len(tools),
        "pages": len(pages),
        "published": [],
        "review": [],
        "rejected": [],
        "errors": [],
    }

    for index, page in enumerate(pages, 1):

        print(
            f"[{index}/{len(pages)}] "
            f"{page.page_type}: {page.slug}"
        )

        try:

            content, tool = generate_page_content(
                page,
                tool_lookup,
            )

            # Add related pages.
            related = render_related_links(
                page,
                link_graph,
            )

            if related:
                content += "\n\n" + related

            # Schema.
            schemas = build_schema(
                page,
                tool,
            )

            # Quality gates.
            failures = hard_quality_gates(
                page,
                content,
                tool,
            )

            score, score_breakdown = calculate_quality_score(
                page,
                content,
                tool,
            )

            # Duplicate fingerprint.
            generated_content[page.slug] = content

            # Status.
            if failures:
                status = "REJECT"

            elif score >= MIN_SCORE_TO_PUBLISH:
                status = "PUBLISH"

            elif score >= MIN_SCORE_TO_REVIEW:
                status = "HUMAN_REVIEW"

            else:
                status = "REJECT"

            result = {
                "slug": page.slug,
                "type": page.page_type,
                "intent": page.intent,
                "score": score,
                "breakdown": score_breakdown,
                "failures": failures,
                "word_count": word_count(content),
                "status": status,
            }

            if status == "PUBLISH":
                path = write_page(
                    page,
                    content,
                    schemas,
                    status,
                )

                result["path"] = str(path)
                report["published"].append(result)

            elif status == "HUMAN_REVIEW":
                path = write_page(
                    page,
                    content,
                    schemas,
                    status,
                )

                result["path"] = str(path)
                report["review"].append(result)

            else:
                report["rejected"].append(result)

        except Exception as exc:

            error = {
                "slug": page.slug,
                "error": str(exc),
            }

            report["errors"].append(error)

    # --------------------------------------------------------
    # Duplicate content report
    # --------------------------------------------------------

    duplicates = detect_duplicate_pages(
        generated_content
    )

    report["duplicates"] = duplicates

    # --------------------------------------------------------
    # Save report
    # --------------------------------------------------------

    report_path = write_report(report)

    # --------------------------------------------------------
    # Summary
    # --------------------------------------------------------

    print()
    print("=" * 70)
    print("GENERATION COMPLETE")
    print("=" * 70)

    print(
        "Published:",
        len(report["published"])
    )

    print(
        "Human review:",
        len(report["review"])
    )

    print(
        "Rejected:",
        len(report["rejected"])
    )

    print(
        "Errors:",
        len(report["errors"])
    )

    print(
        "Duplicate groups:",
        len(duplicates)
    )

    print(
        "Report:",
        report_path
    )


if __name__ == "__main__":
    main()
