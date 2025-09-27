import { connectDB } from '../config/db.js';
import Project from '../models/Project.js';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const seedData = require('../data/projects.json');

async function main() {
  try {
    await connectDB();

    // Optional: clear existing documents to avoid duplicates
    // await Project.deleteMany({});

    // Upsert by title to avoid duplicates if run multiple times
    for (const p of seedData) {
      const { title, description, tags, repoUrl, liveUrl, imageUrl } = p;
      await Project.updateOne(
        { title },
        { $set: { title, description, tags, repoUrl, liveUrl, imageUrl } },
        { upsert: true }
      );
    }

    console.log(`Seeded ${seedData.length} projects.`);
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
}

main();
