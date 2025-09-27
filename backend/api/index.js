import app from '../src/app.js'
import { connectDB } from '../src/config/db.js'

let isConnected = false

export default async function handler(req, res) {
  // Initialize DB connection once per serverless instance
  if (!isConnected) {
    try {
      await connectDB()
      isConnected = true
    } catch (err) {
      console.warn('MongoDB unavailable on Vercel function, continuing without DB. Error:', err?.message)
      // Proceed; controllers that support JSON fallback will still work
    }
  }

  // Delegate to the Express app
  return app(req, res)
}
