// server.js (or wherever your backend server code is)

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Mock database (replace this with your actual database setup)
const users = [];

// Route handler for /api/auth/register
app.post('/api/auth/register', (req, res) => {
  const { username, email, password } = req.body;

  // Basic validation
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Please provide username, email, and password' });
  }

  // Check if user with the same email already exists
  if (users.some(user => user.email === email)) {
    return res.status(400).json({ message: 'Email already registered' });
  }

  // Save user to database (mock implementation)
  const newUser = { id: users.length + 1, username, email, password };
  users.push(newUser);

  // Return success response
  res.status(201).json({ message: 'User registered successfully', user: newUser });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
