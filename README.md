[![Playwright Tests](https://github.com/qascenarios/automationexercise-ii-ts/actions/workflows/playwright.yml/badge.svg)](https://github.com/qascenarios/automationexercise-ii-ts/actions/workflows/playwright.yml)

# Playwright Typescipt End-to-End Tests – Automation Exercise

This repository contains **end-to-end (E2E) tests** written using **Playwright Test (Typescript)** for the  
Automation Exercise application, focusing on **registration, login, product search, cart, and checkout flows**.

**Application under test:**  
👉 https://automationexercise.com


## Project Overview

The goal of this project is to validate critical user journeys on Automation Exercise using  
**modern Typescript-based browser automation**.

The tests simulate real user interactions across multiple browsers to ensure that core e-commerce
features behave correctly and consistently.

This project uses:
- **Playwright Test** as the test runner
- **Playwright (Typescript)** for browser automation
- **Allure** for test reporting
- **Docker** for containerized execution


## Test Scope

The automated tests cover (but are not limited to):

- Navigating to Automation Exercise
- Registering a new user account
- Logging in with valid and invalid credentials
- Searching for products and validating results
- Adding products to the shopping cart
- Viewing and validating cart contents
- Checkout flow validation
- Assertions for UI behavior and content


## Tech Stack

- **Typscript (Node.js)**
- **Playwright Test**
- **Allure Reporter**
- **Docker**


## Prerequisites

Ensure the following are installed:

- **Node.js 18+**
- **npm** or **yarn**


## Installation

### Clone the repository
```bash
git clone https://github.com/qascenarios/automationexercise-ii-ts.git
cd automationexercise-ii-ts
```

### Install dependencies
```bash
npm install
```

### Install Playwright browsers
```bash
npx playwright install
```

## Running Tests

### Run all tests (headless)
```bash
npx playwright test
```

### Run tests in headed (UI) mode
```bash
npx playwright test --headed
```

### Run tests in a specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run a specific test file
```bash
npx playwright test tests/login.spec.js
```

### Run in Playwright UI mode (debugging)
```bash
npx playwright test --ui
```

## Test Reports (Allure)

### Generate Allure results
```bash
npx playwright test --reporter=line,allure-playwright
```

### Serve the Allure report
```bash
allure serve allure-results
```
