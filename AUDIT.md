# AUDIT.md — BestAIAgent.in Repository Audit

> Evidence-first audit performed against the working tree at commit `b2bf75f`.
> Classification legend: `CRITICAL` · `HIGH` · `MEDIUM` · `LOW` · `OPPORTUNITY`
> Claim classification: every statement below is `VERIFIED` from source unless marked `INFERRED`.

## A. Architecture

- **Stack (VERIFIED):** Next.js 16 (App Router, `force-static` pages), React 19, TypeScript (strict), Tailwind CSS 4, `drizzle-orm` declared, `vite`/`@vitejs/plugin-rsc` present, `wrangler` declared, `tsx`, `vitest`.
- **Routing (VERIFIED):** Single source of truth lives in `src/routing/routeRegistry.ts`; `app/sitemap.ts` and `scripts/seo/build-canonical-db.ts` derive from it. `src/routing/redirect-resolver.ts` resolves active redirects + quarantined (safety) redirects; `path-normalization.ts` canonicalizes paths.
- **Data layer (VERIFIED):** `src/catalog/*` (`catalog.ts`, `verification.ts`, `types.ts`, `search.ts`, `stats.ts`, `normalization.ts`) drives the directory. `isEntityIndexable()` enforces a publication+verification gate. `src/data/pillars.ts` holds pillar manifests with evidence-linked agents.
- **SEO subsystem (VERIFIED):** `scripts/seo/*` produces `data/seo/canonical-urls.json` (unified current+historical URL DB), `redirect-map.json`, `historical-*.json`, `url-recovery-report.json`, `url-recovery.csv`, `sitemap.xml`. `public/robots.txt` + `app/sitemap.ts` are generated/served.
- **Findings:**
  - MEDIUM: `drizzle-orm` is declared but no migration/schema or DB connection is wired into the running app (`INFERRED` from absence of `db/` usage in routes). Dead dependency surface.
  - LOW: `server/app.ts` and `server/start.ts` reference a legacy Express-style server that CI explicitly verifies is **not** present (`verify-no-legacy-server.mjs`). Residual dead code.
  - OPPORTUNITY: A `middleware.ts` enforcing 410 for gone URLs exists on the SEO branch (`feat/pillar-server-data`); not yet on this base. Should be carried into the merged line.

## B. Product capabilities

- **What it is (VERIFIED):** An **evidence-led discovery and comparison directory** for public AI agents, models, providers, and MCP tooling — *not* a framework for building agents.
- **Core surfaces (VERIFIED):** home discovery experience (`app/page.tsx`, `AgentExplorer`), directory routes (`/models`, `/agents`, `/providers`, `/categories`, `/compare`), pillar buyer-guides (`/best-ai-agent*`), `/marketplace`, `/resources`, `/built-in-india`, `/about`, `/methodology`, machine-readable feeds (`/catalog.json`, `/models.json`, `/agents.json`, `/providers.json`), `/llms.txt`.
- **Methodology (VERIFIED):** Match intent → verify claims (first-party evidence + review dates) → expose uncertainty (no fabricated scores) → refresh. This is a genuine differentiator and must be preserved in all docs.
- OPPORTUNITY: Catalog entities currently gate to empty (`isEntityIndexable` returns false for all shipped data), so dynamic entity pages render no cards. This is intentional (no unverified data published) but should be documented as a product decision.

## C. UX/UI

- (VERIFIED) Server-rendered, static pages; `DirectAnswer` microdata, `PageJsonLd`, speakable/FAQ/HowTo structured data on pillars. Hero imagery via `next/image`.
- MEDIUM: No documented design system / visual identity file; styling is spread across `globals.css`, `authority.css`, `pillars.css`. A consolidated `docs/assets/visual-system` would help contributors.
- OPPORTUNITY: Animated GIF/screenshot walkthroughs of the discovery flow do not exist (would strengthen README, but must use real UI only).

## D. Performance

- (VERIFIED) `verify-performance.mjs` enforces server components, `next/image`, AVIF/WebP, `poweredByHeader:false`, CSP, HSTS, no raw `<img>`, SRI on external scripts, no browser-time Google Fonts.
- LOW: No measured Lighthouse/bundle report committed. Performance is asserted by gate, not benchmarked.

## E. Accessibility

- (VERIFIED) `prefers-reduced-motion` and semantic structure are referenced in the performance gate; pillars emit FAQPage/HowTo/speakable.
- MEDIUM: No formal a11y audit artifact exists; contrast/focus/ARIA not independently verified beyond gate assumptions.

## F. Security

- (VERIFIED) CSP, HSTS, `X-Content-Type-Options`, `X-Frame-Options:DENY`, `Permissions-Policy`, `Referrer-Policy` set in `next.config.ts`. No secrets committed.
- MEDIUM: No `SECURITY.md`, no `security.yml` issue template, no dependency/CodeQL scanning in CI. `.env.example` is present and sane (no real secrets).
- LOW: `ADMIN_JWT_SECRET`/`ADMIN_PASSWORD_HASH` suggest an admin surface that is not wired into shipped routes (`INFERRED`).

## G. Developer experience

- (VERIFIED) Clear scripts: `dev`, `build`, `start`, `lint`, `typecheck`, `test`, comprehensive `verify:*` and `seo:*` commands. `vitest` unit tests pass (20 tests).
- HIGH: **No `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SUPPORT.md`, `GOVERNANCE.md`, or `CHANGELOG.md`.** First-time contributors have no guidance.
- HIGH: **No issue/PR templates, no `dependabot.yml`.** Community intake is unstructured.
- MEDIUM: No `LICENSE` file and `package.json` has no `license` field. Licensing is undecided — must be resolved before public "10/10" community health claim.

## H. Documentation

- (VERIFIED) `public/llms.txt` is excellent (canonical directories, verification policy, source policy, freshness contract). `AGENTS.md` documents CI/verify commands. Methodology page exists.
- HIGH: **`README.md` is a single trivial line.** This is the repo's primary onboarding surface and is currently near-empty.
- OPPORTUNITY: No `docs/` tree, no architecture diagram, no getting-started guide, no runbook for the SEO recovery subsystem (which is substantial and non-obvious).

## I. GitHub community health

- (VERIFIED) CI exists (`.github/workflows/ci.yml` runs typecheck, test, full SEO verify chain, build on `main`/`develop` + PRs). `release-exact-head.yml`, `catalog-refresh.yml` present.
- HIGH: Missing all community-health files and templates (see G/H).
- OPPORTUNITY: Repo metadata (description, topics, homepage, social preview) likely unoptimized; Discussions/Wiki not leveraged.

## J. Discoverability

- (VERIFIED) Strong technical SEO foundation: canonical DB, sitemap, robots, redirect resolver, `llms.txt`. Live production currently 404s `robots.txt`/`sitemap.xml` (deploy gap, not code gap).
- MEDIUM: GitHub-level discoverability (topics, description, README quality) is the weak link.

## K. SEO

- (VERIFIED) See J. On-page SEO is mature for the product; off-platform (GitHub) SEO is the gap this workstream addresses.

## L. AEO/GEO

- (VERIFIED) `public/llms.txt` + structured data + DirectAnswer satisfy AI-search readability well. `app/llms-full.txt/route.ts` provides the full machine-readable contract.

## M. CI/CD

- (VERIFIED) `ci.yml` is solid. Missing: docs build/link-check, dependency audit, CodeQL/secret scanning, release automation gating on the verify chain.
- MEDIUM: CI triggers on `main`/`develop` only; PRs from feature branches run CI (good), but there is no required status-check enforcement documented.

## N. Release engineering

- (VERIFIED) `release-exact-head.yml` enforces exact-head release identity. No `CHANGELOG.md`, no SemVer tag automation wired into a release workflow.

## O. Missing opportunities (priority order)

1. **HIGH** — Author `README.md` as a premium product/landing page (accurate to a discovery platform).
2. **HIGH** — Add community-health files (`CONTRIBUTING`, `CODE_OF_CONDUCT`, `SECURITY`, `SUPPORT`, `GOVERNANCE`, `CHANGELOG`).
3. **HIGH** — Add issue/PR templates + `dependabot.yml` + a security scanning workflow.
4. **HIGH** — Resolve licensing (add `LICENSE` once decided).
5. **MEDIUM** — Add `docs/` (architecture, getting-started, concepts) and an architecture diagram.
6. **MEDIUM** — Optimize GitHub repo metadata (description, topics, homepage, social preview).
7. **LOW** — Remove residual dead code (`server/*`, unused `drizzle-orm` if truly unused).
8. **OPPORTUNITY** — GitHub Wiki + (optional) Pages; GIF/social-preview assets using real UI only.

> This audit prescribes changes only where evidence supports them. No application architecture is altered without cause.
