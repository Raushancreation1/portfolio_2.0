# Portfolio Frontend (React + Vite + Tailwind)

This is the frontend for the portfolio web app, built with React, Vite, and Tailwind CSS.

## Scripts
- `npm run dev` — start local dev server at http://localhost:5173
- `npm run build` — production build
- `npm run preview` — preview the production build

## Backend API Proxy
Vite is configured to proxy requests that start with `/api` to the backend at `http://localhost:4000`. See `vite.config.js`.

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```

Make sure your backend is running on port 4000.

## Customization
- Adjust theme colors in `tailwind.config.js`.
- Edit content in `src/App.jsx` and components in `src/components/`.
