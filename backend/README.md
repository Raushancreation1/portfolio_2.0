# Portfolio Backend (Node.js + Express)

A simple, secure, and extensible backend API for a personal portfolio.

## Features
- Health check endpoint: `GET /api/health`
- Projects endpoint: `GET /api/projects`
- Contact endpoint with validation: `POST /api/contact`
- Security headers via `helmet`
- CORS enabled
- Request logging via `morgan`
- Environment config via `dotenv`

## Getting Started

### 1) Install dependencies
```bash
npm install
```

### 2) Set environment variables
Copy `.env.example` to `.env` and adjust as needed.
```bash
cp .env.example .env
```

### 3) Run in development
```bash
npm run dev
```
Server will start at: `http://localhost:4000`

### 4) Run in production
```bash
npm start
```

## API

- GET `/api/health` -> `{ status: 'ok', timestamp }`
- GET `/api/projects` -> `{ success: true, data: [...] }`
- POST `/api/contact`
  - body: `{ name, email, message }`
  - response: `{ success: true, message: 'Message received' }`

## Structure
```
backend/
  src/
    config/
      index.js
    controllers/
      contact.controller.js
      projects.controller.js
    data/
      projects.json
    routes/
      contact.routes.js
      health.routes.js
      projects.routes.js
    utils/
      validate.js
    app.js
    server.js
  .env.example
  .gitignore
  package.json
  README.md
```

## Notes
- `POST /api/contact` currently logs the submission server-side. You can later integrate email providers (e.g., Nodemailer, SendGrid) using the `CONTACT_TO_EMAIL` setting.
