import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

require('dotenv').config(); // Load environment variables from .env file

// Initialize Express application
const app = express();

// Set the port
const PORT = process.env.PORT || 5300;

// TypeScript type for environment variable
const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error('MongoDB URI is not defined in environment variables.');
  process.exit(1); // Exit if the URI is not defined
}


// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error: any) => {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  });

// Basic route for testing
app.get('/', (req: Request, res: Response) => {
  res.send('Result Management System!');
});

// Listen for incoming connections
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
