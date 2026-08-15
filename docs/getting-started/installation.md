# Getting started — installation & first run

## Prerequisites

- **Node.js >= 22.13** (see `package.json` `engines`)
- npm (ships with Node)

## Install

```bash
git clone https://github.com/CodesbyFebin/Best-Ai-Agents.git
cd Best-Ai-Agents
npm install
```

## Run locally

```bash
npm run dev      # start the dev server (Next.js)
npm run build    # production build
npm start        # serve the production build
```

The site is a static, server-rendered Next.js app; open the local URL printed by
the dev server.

## Verify your environment

```bash
npm run lint        # eslint
npm run typecheck   # tsc --noEmit
npm test            # vitest unit tests
npm run verify:all  # full acceptance gate chain
```

All PRs must pass `npm run verify:all`.

## Next steps

- Understand the [architecture](../architecture.md).
- Read the [contribution guide](../../CONTRIBUTING.md), especially the verification
  policy.
- Explore the live site: <https://bestaiagent.in>
