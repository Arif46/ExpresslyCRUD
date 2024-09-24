const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', userRoutes);
app.use('/api', categoryRoutes); 

// Simple route to check server
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/crud-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.log('Failed to connect to MongoDB', err);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
