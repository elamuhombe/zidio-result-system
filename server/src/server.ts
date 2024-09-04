import express, { Request, Response } from 'express';

require('dotenv').config();

// Initialize Express application
const app = express();

// Set the port
const PORT = process.env.PORT || 5300;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route for testing
app.get('/', (req: Request, res: Response) => {
    res.send('Result Management System!');
});

// Listen for incoming connections
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
  });

