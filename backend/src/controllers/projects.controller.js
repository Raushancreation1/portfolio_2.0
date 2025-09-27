import { createRequire } from 'module';
import Project from '../models/Project.js';

const require = createRequire(import.meta.url);
const projects = require('../data/projects.json');

export const listProjects = async (req, res) => {
  try {
    // Try to read from MongoDB first
    const docs = await Project.find({}).sort({ createdAt: -1 }).lean();
    if (docs && docs.length > 0) {
      return res.json({ success: true, data: docs });
    }

    // Fallback to bundled JSON if DB is empty
    return res.json({ success: true, data: projects });
  } catch (err) {
    console.error('Failed to list projects:', err);
    return res.status(500).json({ success: false, error: 'Failed to fetch projects' });
  }
};
