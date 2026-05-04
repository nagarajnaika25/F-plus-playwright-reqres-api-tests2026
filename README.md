# F-plus-playwright-reqres-api-tests2026
Playwright API automation framework with Create, Get, Update user flow using ReqRes, environment variables, and structured test design.

# Playwright API Automation - ReqRes

## Overview

This project demonstrates API automation using Playwright for CRUD operations (Create, Get, Update) on ReqRes API.

##  Test Scenarios

* Create User (POST)
* Get User (GET)
* Update User (PUT)

## Authentication

* Uses `x-api-key` stored securely in `.env`

##  Tech Stack

* Playwright
* Node.js
* JavaScript

## 📁 Project Structure

```
Project/
 ├── tests/
 │    ├── API/
 │    ├── UI/
 ├── utils/
 ├── .env
```

## ▶ Run Tests

```
npm install
npx playwright test
```

## Notes

* ReqRes is a mock API → created users are not persisted
* GET API may return 404 (handled in assertions)

## Reports

Run:

```
npx playwright show-report
```

##  Author

Nagaraj Naik
