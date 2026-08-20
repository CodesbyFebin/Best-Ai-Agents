#!/usr/bin/env python3
"""
AI Agent Platform Scraper – Extracts agents from 50+ verified sources.
Supports:
  - Static HTML (requests + BeautifulSoup)
  - JavaScript‑rendered pages (Playwright)
  - JSON APIs
  - GitHub README parsing

Usage:
  python scrape_all_agent_platforms.py --output agents.json --sources all
  python scrape_all_agent_platforms.py --output agents.csv --sources agent.ai,smithery

Dependencies:
  pip install requests beautifulsoup4 playwright
  playwright install chromium
"""

import asyncio
import csv
import json
import re
import time
from dataclasses import dataclass, field, asdict
from typing import List, Dict, Optional, Callable, Any
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup
from playwright.async_api import async_playwright, Browser, Page

# ----------------------------------------------------------------------
# Configuration
# ----------------------------------------------------------------------
REQUEST_TIMEOUT = 20
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
RATE_LIMIT = 1.0  # seconds between requests
MAX_RETRIES = 3
USE_PLAYWRIGHT = True  # Set False to disable headless browser for all sources

# ----------------------------------------------------------------------
# Data Model
# ----------------------------------------------------------------------
@dataclass
class Agent:
    name: str
    description: str = ""
    url: str = ""
    category: str = ""
    price: str = ""
    rating: str = ""
    creator: str = ""
    source: str = ""
    skills: str = ""
    use_case: str = ""
    extra: Dict[str, Any] = field(default_factory=dict)

    def to_dict(self) -> Dict:
        return {k: v for k, v in asdict(self).items() if v not in (None, "", [])}

# ----------------------------------------------------------------------
# Base Scraper
# ----------------------------------------------------------------------
class BaseScraper:
    """Base class for all scrapers."""
    def __init__(self, use_playwright: bool = True):
        self.use_playwright = use_playwright and USE_PLAYWRIGHT
        self.session = requests.Session()
        self.session.headers.update({"User-Agent": USER_AGENT})
        self.agents: List[Agent] = []
        self.name = self.__class__.__name__.replace("Scraper", "").lower()

    def _fetch_html(self, url: str) -> Optional[str]:
        """Fetch HTML using requests (fallback)."""
        try:
            time.sleep(RATE_LIMIT)
            resp = self.session.get(url, timeout=REQUEST_TIMEOUT)
            resp.raise_for_status()
            return resp.text
        except Exception as e:
            print(f"  [HTTP Error] {url}: {e}")
            return None

    async def _fetch_html_playwright(self, url: str, wait_selector: str = "body") -> Optional[str]:
        """Fetch HTML using Playwright (for JS‑rendered pages)."""
        if not self.use_playwright:
            return self._fetch_html(url)
        try:
            async with async_playwright() as p:
                browser = await p.chromium.launch(headless=True)
                page = await browser.new_page(user_agent=USER_AGENT)
                await page.goto(url, timeout=REQUEST_TIMEOUT * 1000, wait_until="networkidle")
                await page.wait_for_selector(wait_selector, timeout=5000)
                html = await page.content()
                await browser.close()
                return html
        except Exception as e:
            print(f"  [Playwright Error] {url}: {e}")
            # fallback to HTTP
            return self._fetch_html(url)

    def _extract_text(self, soup: BeautifulSoup, selector: str) -> str:
        el = soup.select_one(selector)
        return el.get_text(strip=True) if el else ""

    def _extract_attr(self, soup: BeautifulSoup, selector: str, attr: str) -> str:
        el = soup.select_one(selector)
        return el.get(attr, "").strip() if el else ""

    async def scrape(self) -> List[Agent]:
        """Override in subclasses."""
        raise NotImplementedError

# ----------------------------------------------------------------------
# 1. Agent.ai
# ----------------------------------------------------------------------
class AgentAiScraper(BaseScraper):
    URL = "https://agent.ai/agents"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, article, div[class*='agent']")
        for card in cards:
            name = self._extract_text(card, "h3, h2, .name")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                rating=self._extract_text(card, ".rating, .stars"),
                creator=self._extract_text(card, ".creator, .author"),
                source="agent.ai",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 2. Altern.ai
# ----------------------------------------------------------------------
class AlternAiScraper(BaseScraper):
    URL = "https://altern.ai/agents"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-item")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-item, .grid-card, .listing-item")
        for card in cards:
            name = self._extract_text(card, ".name, .title")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, .desc"),
                price=self._extract_text(card, ".price, .cost"),
                category=self._extract_text(card, ".category, .tag"),
                source="altern.ai",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 3. AI Agents Directory
# ----------------------------------------------------------------------
class AiAgentsDirectoryScraper(BaseScraper):
    URL = "https://aiagentsdirectory.com"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .directory-item, .card")
        for card in cards:
            name = self._extract_text(card, "h3, h2")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                use_case=self._extract_text(card, ".use-case, .category"),
                source="aiagentsdirectory.com",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 4. AI Agents List
# ----------------------------------------------------------------------
class AiAgentsListScraper(BaseScraper):
    URL = "https://aiagentslist.com"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent, .item, .card")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                category=self._extract_text(card, ".category, .tag"),
                source="aiagentslist.com",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 5. AI Agent Store
# ----------------------------------------------------------------------
class AiAgentStoreScraper(BaseScraper):
    URL = "https://aiagentstore.ai"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                price=self._extract_text(card, ".price"),
                category=self._extract_text(card, ".category"),
                source="aiagentstore.ai",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 6. DeepNLP (JSON from Hugging Face)
# ----------------------------------------------------------------------
class DeepNlpScraper(BaseScraper):
    URL = "https://huggingface.co/datasets/deepnlp/ai-agent-marketplace-index/raw/main/agents.json"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Fetching dataset...")
        try:
            resp = self.session.get(self.URL, timeout=REQUEST_TIMEOUT)
            resp.raise_for_status()
            data = resp.json()
            for item in data:
                self.agents.append(Agent(
                    name=item.get("name", ""),
                    description=item.get("description", ""),
                    category=item.get("category", ""),
                    url=item.get("url", ""),
                    source="DeepNLP",
                ))
            print(f"  → Found {len(self.agents)} agents")
        except Exception as e:
            print(f"  [Error] {e}")
        return self.agents

# ----------------------------------------------------------------------
# 7. Agensi.io
# ----------------------------------------------------------------------
class AgensiScraper(BaseScraper):
    URL = "https://agensi.io/agents"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-item")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-item, .card, .listing")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                skills=self._extract_text(card, ".skills, .tags"),
                source="agensi.io",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 8. Smithery (MCP Servers)
# ----------------------------------------------------------------------
class SmitheryScraper(BaseScraper):
    URL = "https://smithery.ai"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".server-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".server-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                category="MCP Server",
                source="smithery.ai",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 9. PulseMCP
# ----------------------------------------------------------------------
class PulseMCPScraper(BaseScraper):
    URL = "https://pulsemcp.com"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".mcp-item")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".mcp-item, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                category="MCP Server",
                source="pulsemcp.com",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 10. Glama MCP Marketplace
# ----------------------------------------------------------------------
class GlamaMCPScraper(BaseScraper):
    URL = "https://glama.ai/mcp/servers"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".server")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".server, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                category="MCP Server",
                source="glama.ai",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 11. ClaudeSkills.info
# ----------------------------------------------------------------------
class ClaudeSkillsScraper(BaseScraper):
    URL = "https://claudeskills.info"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".skill-item")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".skill-item, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                category="Skill",
                source="claudeskills.info",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 12. skills.sh
# ----------------------------------------------------------------------
class SkillsShScraper(BaseScraper):
    URL = "https://skills.sh"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".skill")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".skill, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                category="Skill",
                source="skills.sh",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 13. GitHub Awesome Lists (already working)
# ----------------------------------------------------------------------
class GitHubAwesomeScraper(BaseScraper):
    REPOS = [
        ("aloth", "awesome-ai-agents"),
        ("Zijian-Ni", "awesome-ai-agents-2026"),
        ("brandonhimpfen", "awesome-ai-coding-agents"),
        ("Deep-Insight-Labs", "awesome-ai-agents"),
        ("NipunaRanasinghe", "awesome-ai-agents"),
        ("e2b-dev", "awesome-ai-agents"),
        ("DirectorySurf", "awesome-ai-agents-directories"),
        ("bradAGI", "awesome-cli-coding-agents"),
        ("moshehbenavraham", "Ultimate-Agent-Directory"),
        ("prassanna-ravishankar", "a2a-registry"),
        ("llmrix", "registry"),
        ("Friz-zy", "ai-capability-registry"),
    ]

    def _parse_readme(self, html: str) -> List[Dict]:
        agents = []
        lines = html.splitlines()
        for line in lines:
            match = re.search(r"- \[([^\]]+)\]\(([^)]+)\)\s*[-–]\s*(.*)", line)
            if match:
                agents.append({
                    "name": match.group(1).strip(),
                    "url": match.group(2).strip(),
                    "description": match.group(3).strip(),
                })
        return agents

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping GitHub Awesome lists...")
        for owner, repo in self.REPOS:
            url = f"https://raw.githubusercontent.com/{owner}/{repo}/main/README.md"
            html = self._fetch_html(url)
            if not html:
                continue
            for item in self._parse_readme(html):
                self.agents.append(Agent(
                    name=item["name"],
                    description=item["description"],
                    url=item["url"],
                    source=f"GitHub Awesome ({owner}/{repo})",
                ))
            # Try alternative branch if main fails (some repos use master)
            if not self.agents:
                url = f"https://raw.githubusercontent.com/{owner}/{repo}/master/README.md"
                html = self._fetch_html(url)
                if html:
                    for item in self._parse_readme(html):
                        self.agents.append(Agent(
                            name=item["name"],
                            description=item["description"],
                            url=item["url"],
                            source=f"GitHub Awesome ({owner}/{repo})",
                        ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 14. Microsoft Marketplace (API)
# ----------------------------------------------------------------------
class MicrosoftMarketplaceScraper(BaseScraper):
    URL = "https://azuremarketplace.microsoft.com/en-us/marketplace/apps?filters=ai%20agent"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".app-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".app-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="microsoft.com",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 15. Salesforce AgentExchange
# ----------------------------------------------------------------------
class SalesforceAgentExchangeScraper(BaseScraper):
    URL = "https://salesforce.com/agentexchange"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="salesforce.com",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 16. OpenAI GPT Store (requires login – fallback to static page)
# ----------------------------------------------------------------------
class OpenAIGPTStoreScraper(BaseScraper):
    URL = "https://chat.openai.com/gpts"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} (requires login – will try static fallback)...")
        # Use Playwright with login; for now, we try a public page.
        html = await self._fetch_html_playwright(self.URL, ".gpt-card", timeout=10000)
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".gpt-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="openai.com",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 17. Fetch.ai Agentverse
# ----------------------------------------------------------------------
class FetchAiScraper(BaseScraper):
    URL = "https://fetch.ai/agentverse"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="fetch.ai",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 18. OKX AI Agent Marketplace
# ----------------------------------------------------------------------
class OkxAiScraper(BaseScraper):
    URL = "https://okx.com/ai"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="okx.com",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 19. Virtuals Protocol
# ----------------------------------------------------------------------
class VirtualsProtocolScraper(BaseScraper):
    URL = "https://virtuals.io"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="virtuals.io",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 20. OpenServ
# ----------------------------------------------------------------------
class OpenServScraper(BaseScraper):
    URL = "https://openserv.ai"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="openserv.ai",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 21. SwarmZero
# ----------------------------------------------------------------------
class SwarmZeroScraper(BaseScraper):
    URL = "https://swarmzero.ai"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="swarmzero.ai",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 22. AgentHunter
# ----------------------------------------------------------------------
class AgentHunterScraper(BaseScraper):
    URL = "https://agenthunter.io"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="agenthunter.io",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 23. AgentLocker
# ----------------------------------------------------------------------
class AgentLockerScraper(BaseScraper):
    URL = "https://agentlocker.com"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="agentlocker.com",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 24. The Next AI Tool
# ----------------------------------------------------------------------
class TheNextAIToolScraper(BaseScraper):
    URL = "https://thenextaitool.com"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".tool-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".tool-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="thenextaitool.com",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 25. Agentic Tools
# ----------------------------------------------------------------------
class AgenticToolsScraper(BaseScraper):
    URL = "https://agentictools.com"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".tool-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".tool-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="agentictools.com",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 26. AgentLookup
# ----------------------------------------------------------------------
class AgentLookupScraper(BaseScraper):
    URL = "https://agentlookup.com"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="agentlookup.com",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 27. AgentGigs
# ----------------------------------------------------------------------
class AgentGigsScraper(BaseScraper):
    URL = "https://gigs.sh"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".gig-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".gig-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="gigs.sh",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 28. mcp.run
# ----------------------------------------------------------------------
class McpRunScraper(BaseScraper):
    URL = "https://mcp.run"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".mcp-item")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".mcp-item, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                category="MCP Server",
                source="mcp.run",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 29. AgentRankly
# ----------------------------------------------------------------------
class AgentRanklyScraper(BaseScraper):
    URL = "https://rankly.ai"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="rankly.ai",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 30. Claude Market
# ----------------------------------------------------------------------
class ClaudeMarketScraper(BaseScraper):
    URL = "https://claudemarket.ai"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="claudemarket.ai",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 31. AgentSkills.io
# ----------------------------------------------------------------------
class AgentSkillsIoScraper(BaseScraper):
    URL = "https://agentskills.io"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".skill-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".skill-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                category="Skill",
                source="agentskills.io",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 32. ClawHub
# ----------------------------------------------------------------------
class ClawHubScraper(BaseScraper):
    URL = "https://clawhub.com"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="clawhub.com",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 33. SkillsLLM.com
# ----------------------------------------------------------------------
class SkillsLLMScraper(BaseScraper):
    URL = "https://skillsllm.com"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".skill-item")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".skill-item, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                category="Skill",
                source="skillsllm.com",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 34. MuleRun
# ----------------------------------------------------------------------
class MuleRunScraper(BaseScraper):
    URL = "https://mulerun.com"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="mulerun.com",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 35. AgentExchange.ai
# ----------------------------------------------------------------------
class AgentExchangeAiScraper(BaseScraper):
    URL = "https://agentexchange.ai"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="agentexchange.ai",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 36. ClawEarn
# ----------------------------------------------------------------------
class ClawEarnScraper(BaseScraper):
    URL = "https://clawearn.com"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="clawearn.com",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 37. RentAHuman.ai
# ----------------------------------------------------------------------
class RentAHumanAiScraper(BaseScraper):
    URL = "https://rentahuman.ai"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="rentahuman.ai",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 38. OpenTask.ai
# ----------------------------------------------------------------------
class OpenTaskAiScraper(BaseScraper):
    URL = "https://opentask.ai"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="opentask.ai",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 39. Toku
# ----------------------------------------------------------------------
class TokuScraper(BaseScraper):
    URL = "https://toku.ai"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="toku.ai",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 40. Circle Agent Marketplace
# ----------------------------------------------------------------------
class CircleAgentScraper(BaseScraper):
    URL = "https://circle.com"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="circle.com",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 41. AgentLookup (already have)
# ----------------------------------------------------------------------

# ----------------------------------------------------------------------
# 42. The AI Agent Index (theaiagentindex.com)
# ----------------------------------------------------------------------
class TheAiAgentIndexScraper(BaseScraper):
    URL = "https://theaiagentindex.com"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="theaiagentindex.com",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 43. AI Agents Base
# ----------------------------------------------------------------------
class AiAgentsBaseScraper(BaseScraper):
    URL = "https://aiagentsbase.com"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="aiagentsbase.com",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 44. AI Agents Live
# ----------------------------------------------------------------------
class AiAgentsLiveScraper(BaseScraper):
    URL = "https://aiagentslive.com"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="aiagentslive.com",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 45. AgentDirectory.io (Rankly)
# ----------------------------------------------------------------------
class AgentDirectoryIoScraper(BaseScraper):
    URL = "https://agentdirectory.io"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="agentdirectory.io",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 46. AI Agent Lab
# ----------------------------------------------------------------------
class AiAgentLabScraper(BaseScraper):
    URL = "https://aiagentlab.com"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="aiagentlab.com",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 47. AI Agent Finder
# ----------------------------------------------------------------------
class AiAgentFinderScraper(BaseScraper):
    URL = "https://aiagentfinder.com"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="aiagentfinder.com",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 48. AI Agent Hub
# ----------------------------------------------------------------------
class AiAgentHubScraper(BaseScraper):
    URL = "https://aiagenthub.com"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="aiagenthub.com",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 49. AI Agent World
# ----------------------------------------------------------------------
class AiAgentWorldScraper(BaseScraper):
    URL = "https://aiagentworld.com"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="aiagentworld.com",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# 50. Agentic AI Directory
# ----------------------------------------------------------------------
class AgenticAiDirectoryScraper(BaseScraper):
    URL = "https://agentic-ai.directory"

    async def scrape(self) -> List[Agent]:
        print(f"📡 [{self.name}] Scraping {self.URL} ...")
        html = await self._fetch_html_playwright(self.URL, ".agent-card")
        if not html:
            return []
        soup = BeautifulSoup(html, "html.parser")
        cards = soup.select(".agent-card, .card, .item")
        for card in cards:
            name = self._extract_text(card, ".name, h3")
            if not name:
                continue
            self.agents.append(Agent(
                name=name,
                description=self._extract_text(card, ".description, p"),
                source="agentic-ai.directory",
            ))
        print(f"  → Found {len(self.agents)} agents")
        return self.agents

# ----------------------------------------------------------------------
# MAIN ORCHESTRATOR
# ----------------------------------------------------------------------
SCRAPER_CLASSES = [
    AgentAiScraper,
    AlternAiScraper,
    AiAgentsDirectoryScraper,
    AiAgentsListScraper,
    AiAgentStoreScraper,
    DeepNlpScraper,
    AgensiScraper,
    SmitheryScraper,
    PulseMCPScraper,
    GlamaMCPScraper,
    ClaudeSkillsScraper,
    SkillsShScraper,
    GitHubAwesomeScraper,
    MicrosoftMarketplaceScraper,
    SalesforceAgentExchangeScraper,
    OpenAIGPTStoreScraper,
    FetchAiScraper,
    OkxAiScraper,
    VirtualsProtocolScraper,
    OpenServScraper,
    SwarmZeroScraper,
    AgentHunterScraper,
    AgentLockerScraper,
    TheNextAIToolScraper,
    AgenticToolsScraper,
    AgentLookupScraper,
    AgentGigsScraper,
    McpRunScraper,
    AgentRanklyScraper,
    ClaudeMarketScraper,
    AgentSkillsIoScraper,
    ClawHubScraper,
    SkillsLLMScraper,
    MuleRunScraper,
    AgentExchangeAiScraper,
    ClawEarnScraper,
    RentAHumanAiScraper,
    OpenTaskAiScraper,
    TokuScraper,
    CircleAgentScraper,
    TheAiAgentIndexScraper,
    AiAgentsBaseScraper,
    AiAgentsLiveScraper,
    AgentDirectoryIoScraper,
    AiAgentLabScraper,
    AiAgentFinderScraper,
    AiAgentHubScraper,
    AiAgentWorldScraper,
    AgenticAiDirectoryScraper,
]

async def run_scraper(scraper_class, use_playwright: bool = True) -> List[Agent]:
    scraper = scraper_class(use_playwright=use_playwright)
    return await scraper.scrape()

async def main(sources: List[str], output_file: str, output_format: str, use_playwright: bool = True):
    all_agents: List[Agent] = []
    scrapers_to_run = []
    if "all" in sources:
        scrapers_to_run = SCRAPER_CLASSES
    else:
        for s in sources:
            found = False
            for cls in SCRAPER_CLASSES:
                if s.lower() in cls.__name__.lower():
                    scrapers_to_run.append(cls)
                    found = True
                    break
            if not found:
                print(f"⚠️  Source '{s}' not found. Available: {[c.__name__ for c in SCRAPER_CLASSES]}")

    for scraper_cls in scrapers_to_run:
        agents = await run_scraper(scraper_cls, use_playwright)
        all_agents.extend(agents)

    # Remove duplicates (same name + source)
    seen = set()
    unique = []
    for a in all_agents:
        key = (a.name.lower(), a.source.lower())
        if key not in seen:
            seen.add(key)
            unique.append(a)

    print(f"\n✅ Total unique agents extracted: {len(unique)}")

    # Output
    if output_format == "json":
        with open(output_file, "w", encoding="utf-8") as f:
            json.dump([a.to_dict() for a in unique], f, indent=2, ensure_ascii=False)
        print(f"📁 Saved to {output_file} (JSON)")
    else:
        if unique:
            fieldnames = sorted(set().union(*[a.to_dict().keys() for a in unique]))
            with open(output_file, "w", newline="", encoding="utf-8") as f:
                w = csv.DictWriter(f, fieldnames=fieldnames)
                w.writeheader()
                for a in unique:
                    w.writerow(a.to_dict())
            print(f"📁 Saved to {output_file} (CSV)")

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--sources", default="all", help="Comma-separated list of sources (e.g. agent.ai,smithery) or 'all'")
    parser.add_argument("--output", default="agents_extracted", help="Output filename (without extension)")
    parser.add_argument("--format", choices=["csv", "json"], default="csv")
    parser.add_argument("--no-playwright", action="store_true", help="Disable Playwright (use only HTTP requests)")
    args = parser.parse_args()

    sources = args.sources.split(",") if args.sources != "all" else ["all"]
    output_file = f"{args.output}.{args.format}"
    use_playwright = not args.no_playwright

    asyncio.run(main(sources, output_file, args.format, use_playwright))
