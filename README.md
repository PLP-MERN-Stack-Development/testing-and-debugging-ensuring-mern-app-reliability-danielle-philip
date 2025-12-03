# MERN Bug Tracker - Full Project

This archive contains a complete MERN project scaffold with:

* Backend: Express + Mongoose, Jest + Supertest integration tests (uses mongodb-memory-server)
* Frontend: Vite + React, Axios API client, basic components and Vitest tests
* Debugging tips and README for each part

## Quick start (backend)

1. cd backend
2. copy .env.example to .env and adjust MONGO\_URI if you want to use a local MongoDB.
3. npm install
4. npm run dev
5. npm test  (runs integration tests against in-memory MongoDB)

## Quick start (frontend)

1. cd frontend
2. npm install
3. npm run dev
4. The Vite server runs on port 5173 and proxies /api to http://localhost:5000

## Tests \& Coverage

* Backend uses Jest + supertest + mongodb-memory-server for reliable CI-friendly integration tests.
* Frontend includes a basic Vitest test. Add more component tests under src/tests/
* To measure coverage, add appropriate Jest or Vitest coverage flags in package.json scripts.

## Debugging Checklist

* Backend: node --inspect, console.log, inspect running requests, use Postman or curl to test endpoints.
* Frontend: React DevTools, browser Network tab, console logs, Vitest to run unit tests.
* Error boundaries in the frontend capture render-time errors.
* 

## Step 1 — Clone the Project

## git clone https://github.com/yourusername/mern-testing.git

## cd mern-testing

## 

## Step 2 — Install Backend Dependencies

## cd server

## npm install

## 

## Step 3 — Configure Backend Environment

## 

## Inside /server, create:

## 

## cp .env.example .env

## 

## 

## Inside .env, set:

## 

## MONGO\_URI=mongodb://127.0.0.1:27017/bugtracker

## PORT=5000

## 

## 

## If using Atlas:

## 

## MONGO\_URI=your\_atlas\_connection\_string

## 

## Step 4 — Install Frontend Dependencies

## cd ../client

## npm install

## 

## Step 5 — Configure Frontend API Proxy (Already Set)

## 

## Vite automatically forwards /api → backend.

## 

## Nothing to configure unless your backend is remote.

## 

## 6\. Running the Backend

## 

## From /server:

## 

## npm run dev     # Start with nodemon

## npm start       # Production

## 

## 

## Backend should run at:

## 

## http://localhost:5000

## 

## 

## Check:

## 

## GET /api/bugs

## 

## 7\. Running the Frontend

## 

## From /client:

## 

## npm run dev

## 

## 

## App runs at:

## 

## http://localhost:5173

## 

## 

## You should see:

## 

## "Bug Tracker"

## 

## 8\. Running Tests

## Backend Tests (Jest + Supertest)

## 

## From /server:

## 

## Run all tests:

## npm test

## 

## Unit tests include:

## 

## Validation

## 

## Helper functions

## 

## Integration tests include:

## 

## POST /api/bugs

## 

## GET /api/bugs

## 

## PATCH /api/bugs/:id

## 

## DELETE /api/bugs/:id

## 

## Backend tests use in-memory MongoDB (NO real DB needed).

## 

## Frontend Tests (Vitest + RTL)

## 

## From /client:

## 

## npm run test

## 

## 

## Includes:

## 

## Unit tests:

## 

## Form validation

## 

## Component rendering

## 

## Event handlers

## 

## Integration tests:

## 

## API mocking

## 

## UI updates

## 

## E2E Tests (Cypress)

## 

## From /client:

## 

## npx cypress open

## 

## 9\. Debugging Guide

## Backend Debugging

## 

## Open inspector:

## 

## node --inspect src/server.js

## 

## 

## Then open in Chrome:

## 

## chrome://inspect

## 

## 

## Tools:

## 

## Breakpoints

## 

## Watch expressions

## 

## Step-through debugging

## 

## Frontend Debugging

## 

## Use:

## 

## Chrome DevTools

## 

## React DevTools

## 

## Console logs

## 

## Network tab

## 

## Recommended Approach

## 

## Watch state updates in Components

## 

## Inspect failed API requests

## 

## Use breakpoints in JSX

## 

## Check React Error Boundary logs

## 

## 10\. Error Handling System

## Backend Error Handling

## 

## Centralized Express middleware:

## 

## Catches unknown routes

## 

## Captures thrown errors

## 

## Sends JSON response

## 

## Example:

## 

## {

## &nbsp; "error": "Bug not found",

## &nbsp; "status": 404

## }

## 

## Frontend Error Handling

## 

## React Error Boundary wrapper:

## 

## Prevents UI crash

## 

## Displays fallback UI

## 

## Logs error details

