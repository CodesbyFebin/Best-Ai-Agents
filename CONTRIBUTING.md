# Contributing to BestAIAgent.in

Thanks for your interest in improving BestAIAgent.in. This guide covers the
developer loop, the verification policy that makes this project trustworthy, and
how to propose changes.

## Code of conduct

By participating you agree to the
[Code of Conduct](CODE_OF_CONDUCT.md).

## Development loop

```bash
npm install
npm run dev            # start the local dev server
npm run lint          # eslint
npm run typecheck     # tsc --noEmit
npm test              # vitest unit tests
npm run build         # production build
npm run verify:all    # full acceptance gate chain (typecheck + tests + SEO/routes/pillars)
```

All PRs must pass `npm run verify:all` (run automatically in CI).

## Verification policy (important)

BestAIAgent.in is an **evidence-led** directory. Do not add or change any
factual claim about an agent, model, provider, price, or integration without a
first-party or otherwise verifiable source and a review date.

- Catalog data lives in `src/catalog/` and `src/data/`.
- An entity is published only when `isEntityIndexable()` passes (published +
  verified + evidence of an allowed source type).
- Prefer improving `src/data/pillars.ts` manifests with linked `evidence[]`
  entries over inventing summary scores.

## Types of contributions

| Type | Where | Notes |
| --- | --- | --- |
| Bug fix | `app/`, `src/`, `scripts/` | Add a test when feasible |
| Catalog/evidence fix | `src/data/`, `src/catalog/` | Must include source + review date |
| SEO/recovery | `scripts/seo/`, `data/seo/` | Run `npm run verify:recovery` |
| Docs | `README.md`, `docs/` | Keep claims evidence-linked |
| Community | issues/discussions | See labels below |

## Opening a PR

1. Fork and create a feature branch from `main` or `develop`.
2. Make the change and run `npm run verify:all`.
3. Open a PR using the PR template; describe the *what* and *why*.
4. Link any related issue.

## Labels

`good first issue` · `help wanted` · `documentation` · `bug` · `enhancement` ·
`security` · `performance` · `seo` · `catalog` · `ui` · `discussion`

## Good first issues

Look for issues tagged `good first issue` — typically documentation fixes,
additional evidence links, or small UI improvements.
