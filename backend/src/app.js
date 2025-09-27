import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { config } from './config/index.js';
import healthRoutes from './routes/health.routes.js';
import projectsRoutes from './routes/projects.routes.js';
import contactRoutes from './routes/contact.routes.js';
import chatRoutes from './routes/chat.routes.js';

const app = express();

// Security & Core Middlewares
app.use(helmet());
// Configure CORS from env. If no origins provided, allow all (useful for local dev)
const corsOptions = {
  origin: (origin, callback) => {
    const { origins } = config.cors;
    if (!origins || origins.length === 0) {
      // allow all during development when not configured
      return callback(null, true);
    }
    if (!origin) {
      // same-origin or curl/postman without origin header
      return callback(null, true);
    }
    if (origins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error(`CORS: Origin ${origin} not allowed`));
  },
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json({ limit: '1mb' }));
app.use(morgan(config.nodeEnv === 'production' ? 'combined' : 'dev'));

// Routes
app.use('/api/health', healthRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/chat', chatRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Not Found' });
});

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ success: false, error: err.message || 'Internal Server Error' });
});

export default app;
