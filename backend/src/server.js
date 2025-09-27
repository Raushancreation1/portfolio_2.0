import { config } from './config/index.js';
import app from './app.js';
import { connectDB } from './config/db.js';

async function start() {
  try {
    // Try to connect to MongoDB, but do not fail hard in development if it's unavailable.
    try {
      await connectDB();
    } catch (dbErr) {
      console.warn('MongoDB is unavailable. Continuing without DB — falling back to JSON data where applicable.');
      // Continue starting the server so endpoints using JSON fallback still work.
    }

    const server = app.listen(config.port, () => {
      console.log(`API server listening on http://localhost:${config.port}`);
    });

    process.on('SIGTERM', () => server.close());
    process.on('SIGINT', () => server.close());
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

start();
