# Quickstart

This quickstart gets you from clone to a running, verified local environment.

## 1. Clone & install

```bash
git clone https://github.com/CodesbyFebin/Best-Ai-Agents.git
cd Best-Ai-Agents
npm install
```

## 2. Run

```bash
npm run dev
```

Open the printed local URL. You should see the discovery homepage.

## 3. Make a safe first change

Try improving documentation or adding an evidence link to a pillar manifest in
`src/data/pillars.ts` (every claim needs a source + review date). Then:

```bash
npm run verify:all
```

## 4. Understand the verification policy

BestAIAgent.in refuses to publish unverified data or invent scores. Before
changing any factual claim about an agent, model, provider, price, or integration,
add a first-party/verifiable source and a review date.

## 5. Open a PR

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for the full loop.
