# Cypress Demo: Real-World App Automation

A portfolio project building a maintainable end-to-end test suite for the Cypress Real World App. As the application develops, this project will grow to cover its features and user journeys—not only authentication—using Cypress, TypeScript, and Gherkin.

## What this project demonstrates

- **Behavior-driven scenarios** written in Gherkin and connected to TypeScript step definitions with the Cucumber preprocessor.
- **Reusable test structure** that separates page elements, actions, and assertions.
- **UI and API-level verification**, including form validation, intercepted login responses, and remember-me cookie behavior.
- **Readable test execution** with Cypress's interactive runner, optional command slow-down in interactive mode, and timestamp reporting.

## Current coverage

Authentication is the initial focus. The login feature currently covers:

- Required-field and password-length validation.
- Rejection of invalid credentials.
- Navigation from sign-in to sign-up and back.
- Successful login with remember-me enabled and disabled, including cookie expiration checks.

The sign-up feature file is a scaffold. Additional application features and user journeys will be added to the suite as the Cypress Real World App develops.

## Technology

- Cypress 16
- TypeScript
- Gherkin and `@badeball/cypress-cucumber-preprocessor`
- Firefox for local GUI and headless test runs
- ESLint and Prettier

## Prerequisites

- Node.js and npm compatible with the installed Cypress version.
- The application under test running at `http://localhost:3000`.
- Valid application credentials for the successful-login scenarios.

This repository contains the test suite, not the application itself. It targets a separately running Cypress Real World App instance; keep the application and tests aligned as the app develops.

## Run the application under test

To try the tests against the app locally, follow the setup instructions in the official [Cypress Real World App repository](https://github.com/cypress-io/cypress-realworld-app). Start the app using the instructions for that project and leave it running at `http://localhost:3000`.

Then return to this repository, configure the test credentials below, and run the Cypress suite. The app and this test project are maintained separately, so check the app's README for current requirements and setup steps.

## Getting started

Install dependencies:

```bash
npm install --legacy-peer-deps
```

Copy `.env.example` to `.env` in the project root, then replace the placeholder values with credentials for the application:

```bash
Copy-Item .env.example .env
```

The Cypress configuration loads these values for tests. Keep real credentials in your local `.env` file; it is excluded from Git.

Start the application under test separately, then run the suite:

```bash
# Open the Cypress interactive runner in Firefox
npm run gui

# Run the tests headlessly in Firefox
npm test
```

The interactive run applies a small command delay to make test activity easier to follow. Headless runs are not slowed down.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run format:check
```

## Project structure

```text
cypress/
  e2e/
    login.feature          # Login behavior scenarios
    signup.feature         # Sign-up scenario scaffold
    hooks/                 # Shared setup and network intercepts
    pom/                   # Gherkin step definitions and page-object modules
  support/                 # Cypress support setup and custom commands
cypress.config.ts          # Cypress, Cucumber, and TypeScript bundler setup
```
