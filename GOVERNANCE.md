# Governance

BestAIAgent.in is an open-source project maintained by its core maintainers with
community contributions reviewed via pull requests.

## Roles

- **Maintainers** — review and merge PRs, manage releases, and own the
  verification policy.
- **Contributors** — anyone who opens issues or PRs following
  [CONTRIBUTING.md](CONTRIBUTING.md).
- **Community** — users and discussants in Issues and Discussions.

## Decision process

- Routine fixes and documentation: maintainer review on PR.
- Catalog/evidence changes: must satisfy the verification policy (first-party or
  verifiable source + review date). Maintainers may request additional sources.
- Architecture or scope changes: discussed in an issue before implementation.

## Licensing status

> **The repository currently has no chosen license.** This is an open decision,
> not an oversight to be silently resolved.

Until a license is added:

- Code is provided "as is" without warranty.
- You may read and fork for evaluation, but redistribution/derivative rights are
  not granted by default.
- A `LICENSE` file will be added once the maintainers select one (MIT/Apache-2.0
  are the candidates under consideration). Do **not** assume any specific license
  in the meantime.

## Releases

Releases follow Semantic Versioning. See [CHANGELOG.md](CHANGELOG.md) and the
release workflow. Exact-head release identity is enforced by
`.github/workflows/release-exact-head.yml`.
