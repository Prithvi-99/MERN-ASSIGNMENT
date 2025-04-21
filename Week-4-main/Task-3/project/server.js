// server.js
import express from 'express';

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Express Server!');
});

// POST route to test JSON parsing
app.post('/api/data', (req, res) => {
  console.log('Received Data:', req.body);
  res.json({ message: 'Data received successfully', data: req.body });
});

// Start the server on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
