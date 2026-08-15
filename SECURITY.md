# Security Policy

## Reporting a vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, report them privately using GitHub's private vulnerability reporting
(feature available under **Security → Advisories → Report a vulnerability**) or by
contacting the maintainers directly.

Include:

- A description of the vulnerability and its impact
- Steps to reproduce
- Affected versions / commit range
- Any suggested mitigation

We will acknowledge receipt within a reasonable time and keep you informed of
progress.

## Supported versions

Security fixes are applied to the latest released line on the default branch.
Older unpublished or archived branches are not guaranteed fixes.

## Scope notes

BestAIAgent.in is a static, evidence-led directory. The following are explicitly
out of scope for this repository's threat model unless they affect the hosted
service:

- Third-party agent/model/provider behavior
- Claims published in catalog data (governed by the verification policy, not
  security)

## Hardening already in place (VERIFIED)

- Content-Security-Policy, HSTS, `X-Content-Type-Options`, `X-Frame-Options: DENY`,
  and `Permissions-Policy` set in `next.config.ts`
- `poweredByHeader: false`; AVIF/WebP image formats only
- No secrets are committed; configuration is provided via `.env.example`
- Legacy Express server path removed (verified by `verify-no-legacy-server`)
