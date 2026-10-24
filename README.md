# Practical 12 — CI/CD Pipeline with GitHub Actions

Student: **Rishi Sanja** · ID: **24ce109**

[![CI Pipeline](https://github.com/your-account/your-repository/actions/workflows/ci.yml/badge.svg)](https://github.com/your-account/your-repository/actions/workflows/ci.yml)

The workflow at `.github/workflows/ci.yml` runs on pushes and pull requests targeting `main`. It checks out the repository, installs dependencies with `npm install`, runs ESLint in a separate job, and runs two automated Supertest tests.

## Local check

```bash
npm install
npm run lint
npm test
```

## Required failed/passed demonstration

For the lab evidence, temporarily change one expected status in `server.test.js` so the workflow fails, push that commit, capture the red run and failure log, then restore the correct expectation and push again to capture the green run. Replace the placeholder badge URL with the actual GitHub owner/repository after publishing.
