import dotenv from 'dotenv';

dotenv.config();

export const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '4000', 10),
  cors: {
    // Comma-separated list of allowed origins, e.g. "http://localhost:5173,https://example.com"
    origins: (process.env.CORS_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean),
  },
  database: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio',
    dbName: process.env.MONGODB_DB || undefined,
  },
  contact: {
    to: process.env.CONTACT_TO_EMAIL || '',
  },
};
