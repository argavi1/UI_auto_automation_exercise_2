# Cypress UI Automation for automationexercise.com

## Overview

This repository contains UI automation scripts written in JavaScript using Cypress for the website [automationexercise.com](https://automationexercise.com).

## Prerequisites

- Node.js and npm installed on your machine.
- Ensure that the website automationexercise.com is accessible.

## Dependencies

- [cypress/browserify-preprocessor](https://www.npmjs.com/package/cypress/browserify-preprocessor)
- [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver)
- [cypress](https://www.npmjs.com/package/cypress)
- [cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter)
- [prettier](https://www.npmjs.com/package/prettier)

## Test Scenarios

1. **Successful Sending Email:**
   - Command: `npm run test:send-email`

2. **Successful Login:**
   - Command: `npm run test:login`

3. **Successful Search Product:**
   - Command: `npm run test:search-product`

4. **Search Product & Add to Cart:**
   - Command: `npm run test:search-and-add-to-cart`

5. **Successful Register with Random Email:**
   - Command: `npm run test:register-with-random-email`

## How to Run

1. **Install Dependencies:**
   ```bash
   npm cypress open
   npm cypress run
