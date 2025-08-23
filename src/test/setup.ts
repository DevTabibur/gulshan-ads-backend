import { beforeAll, afterAll } from 'vitest';
import mongoose from 'mongoose';

beforeAll(async () => {
  // Connect to test database
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test');
});

afterAll(async () => {
  // Disconnect from test database
  await mongoose.disconnect();
});
