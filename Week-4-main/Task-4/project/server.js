// server.js
import express from 'express';

const app = express();
const PORT = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// GET route for /welcome
app.get('/welcome', (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
