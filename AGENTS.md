# AGENTS.md

## Build & Verification Commands

### Core Checks
```bash
npm run typecheck    # TypeScript: tsc --noEmit
npm run test         # Unit tests: vitest run
npm run build        # Next.js production build
```

### SEO Recovery Pipeline
```bash
npm run seo:recover-urls            # Catalog historical URLs & protected sources
npm run seo:build-canonical-db      # Generate data/seo/canonical-urls.json
npm run seo:build-redirect-map      # Generate data/seo/redirect-map.json (2 active, 49 quarantined)
npm run seo:generate-sitemap        # Generate data/seo/sitemap.xml (16 canonical URLs)
npm run seo:generate-reports        # Generate recovery reports & CSV
npm run seo:generate-sc-reconciliation  # Export Search Console reconciliation
```

### Verification Gates
```bash
npm run verify:recovery   # Full SEO recovery chain (all gates above)
npm run verify:canonical  # Canonical URL correctness & normalization
npm run verify:redirects  # Active redirect destinations are live
npm run verify:sitemap    # Sitemap contains all indexable canonicals
npm run verify:robots     # robots.txt correctness
npm run verify:seo        # Route registry & pillar verification
npm run verify:routes     # Route contract validation
npm run verify:pillars    # Priority pillar routes (5 canonical routes)
npm run verify:all        # Full verification chain + build
```

### Data Sources
- Recovery branch: `origin/feature/gsc-recovery-runtime`
  - `data/redirects/redirect-map.json` → saved as `data/seo/legacy-redirect-map.json`
  - `data/migration/protected-urls.json` → used by `recover-urls.ts`
