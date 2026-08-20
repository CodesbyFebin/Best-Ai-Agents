#!/usr/bin/env python3
"""
AI Agent Scraper for bestaiagent.in
Extracts agents from:
  - agent.ai (public directory)
  - altern.ai
  - aiagentsdirectory.com
  - aiagentslist.com
  - aiagentstore.ai
  - DeepNLP GitHub JSON index
  - Agensi.io
  - GitHub Awesome lists
"""

import requests
from bs4 import BeautifulSoup
import json
import csv
import re
import time
from typing import List, Dict
from urllib.parse import urljoin

USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
DELAY = 1.0  # seconds between requests

class AgentScraper:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({"User-Agent": USER_AGENT})
        self.agents = []

    def _fetch(self, url):
        try:
            time.sleep(DELAY)
            r = self.session.get(url, timeout=15)
            r.raise_for_status()
            return r.text
        except Exception as e:
            print(f"Error fetching {url}: {e}")
            return None

    def scrape(self):
        raise NotImplementedError

# ----------------------------------------------------------------------
# 1. Agent.ai
# ----------------------------------------------------------------------
class AgentAiScraper(AgentScraper):
    def scrape(self):
        print("📡 Scraping agent.ai ...")
        html = self._fetch("https://agent.ai/agents")
        if not html: return []
        soup = BeautifulSoup(html, "html.parser")
        # Try various selectors; adjust if needed
        cards = soup.select("article, .agent-card, div[class*='agent']")
        for card in cards:
            name = card.select_one("h3, h2, .name")
            desc = card.select_one("p, .description")
            rating = card.select_one(".rating, .stars")
            creator = card.select_one(".creator, .author")
            if name:
                self.agents.append({
                    "name": name.get_text(strip=True),
                    "description": desc.get_text(strip=True) if desc else "",
                    "rating": rating.get_text(strip=True) if rating else "",
                    "creator": creator.get_text(strip=True) if creator else "",
                    "source": "agent.ai"
                })
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 2. altern.ai
# ----------------------------------------------------------------------
class AlternAiScraper(AgentScraper):
    def scrape(self):
        print("📡 Scraping altern.ai ...")
        html = self._fetch("https://altern.ai/agents")
        if not html: return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-item, .grid-card")
        for card in cards:
            name = card.select_one(".name, .title")
            desc = card.select_one(".description, .desc")
            price = card.select_one(".price, .cost")
            category = card.select_one(".category, .tag")
            if name:
                self.agents.append({
                    "name": name.get_text(strip=True),
                    "description": desc.get_text(strip=True) if desc else "",
                    "price": price.get_text(strip=True) if price else "",
                    "category": category.get_text(strip=True) if category else "",
                    "source": "altern.ai"
                })
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 3. aiagentsdirectory.com
# ----------------------------------------------------------------------
class AiAgentsDirectoryScraper(AgentScraper):
    def scrape(self):
        print("📡 Scraping aiagentsdirectory.com ...")
        html = self._fetch("https://aiagentsdirectory.com")
        if not html: return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .directory-item")
        for card in cards:
            name = card.select_one("h3, h2")
            desc = card.select_one(".description, p")
            use_case = card.select_one(".use-case, .category")
            if name:
                self.agents.append({
                    "name": name.get_text(strip=True),
                    "description": desc.get_text(strip=True) if desc else "",
                    "use_case": use_case.get_text(strip=True) if use_case else "",
                    "source": "aiagentsdirectory.com"
                })
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 4. DeepNLP (JSON from GitHub)
# ----------------------------------------------------------------------
class DeepNlpScraper(AgentScraper):
    def scrape(self):
        print("📡 Scraping DeepNLP index ...")
        url = "https://raw.githubusercontent.com/deepnlp/ai-agent-marketplace-index/main/agents.json"
        html = self._fetch(url)
        if not html: return []
        try:
            data = json.loads(html)
            for item in data:
                self.agents.append({
                    "name": item.get("name", ""),
                    "description": item.get("description", ""),
                    "category": item.get("category", ""),
                    "url": item.get("url", ""),
                    "source": "DeepNLP"
                })
        except Exception as e:
            print(f"  JSON parse error: {e}")
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 5. Agensi.io
# ----------------------------------------------------------------------
class AgensiScraper(AgentScraper):
    def scrape(self):
        print("📡 Scraping agensi.io ...")
        html = self._fetch("https://agensi.io/agents")
        if not html: return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-item, .card")
        for card in cards:
            name = card.select_one(".name, h3")
            desc = card.select_one(".description, p")
            skills = card.select_one(".skills, .tags")
            if name:
                self.agents.append({
                    "name": name.get_text(strip=True),
                    "description": desc.get_text(strip=True) if desc else "",
                    "skills": skills.get_text(strip=True) if skills else "",
                    "source": "agensi.io"
                })
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 6. GitHub Awesome Lists
# ----------------------------------------------------------------------
class GitHubAwesomeScraper(AgentScraper):
    REPOS = [
        "https://raw.githubusercontent.com/aloth/awesome-ai-agents/main/README.md",
        "https://raw.githubusercontent.com/Zijian-Ni/awesome-ai-agents-2026/main/README.md",
        "https://raw.githubusercontent.com/brandonhimpfen/awesome-ai-coding-agents/main/README.md",
    ]
    def scrape(self):
        print("📡 Scraping GitHub Awesome lists ...")
        for url in self.REPOS:
            html = self._fetch(url)
            if not html: continue
            lines = html.splitlines()
            for line in lines:
                # Match markdown list items: - [Name](url) - Description
                match = re.search(r"- \[([^\]]+)\]\(([^)]+)\)\s*[-–]\s*(.*)", line)
                if match:
                    self.agents.append({
                        "name": match.group(1).strip(),
                        "url": match.group(2).strip(),
                        "description": match.group(3).strip(),
                        "source": "GitHub Awesome"
                    })
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# Run all scrapers and save output
# ----------------------------------------------------------------------
def main():
    scrapers = [
        AgentAiScraper(),
        AlternAiScraper(),
        AiAgentsDirectoryScraper(),
        DeepNlpScraper(),
        AgensiScraper(),
        GitHubAwesomeScraper(),
    ]
    all_agents = []
    for s in scrapers:
        all_agents.extend(s.scrape())

    # Remove exact duplicates by (name, source)
    seen = set()
    unique = []
    for a in all_agents:
        key = (a.get("name", "").lower(), a.get("source", ""))
        if key not in seen:
            seen.add(key)
            unique.append(a)

    # Save CSV
    if unique:
        fieldnames = set()
        for a in unique:
            fieldnames.update(a.keys())
        fieldnames = sorted(fieldnames)
        with open("agents_extracted.csv", "w", newline="", encoding="utf-8") as f:
            w = csv.DictWriter(f, fieldnames=fieldnames)
            w.writeheader()
            for a in unique:
                w.writerow(a)
        print(f"\n✅ Extracted {len(unique)} unique agents to agents_extracted.csv")
    else:
        print("❌ No agents found.")

if __name__ == "__main__":
    main()
