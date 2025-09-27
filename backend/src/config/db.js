import mongoose from 'mongoose';
import { config } from './index.js';

export async function connectDB() {
  const uri = config.database.uri;
  if (!uri) {
    throw new Error('MONGODB_URI is not set. Please define it in your .env file.');
  }

  // Optional: strictQuery to suppress deprecation warnings in some versions
  mongoose.set('strictQuery', true);

  try {
    await mongoose.connect(uri, {
      // If MONGODB_DB is set and the URI has no db path, this will select the db.
      // If the URI already includes a db name, mongoose will use that.
      dbName: config.database.dbName,
      // useNewUrlParser and useUnifiedTopology are defaults in modern versions
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    throw err;
  }
}
