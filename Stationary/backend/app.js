const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const inventoryRoutes = require('./routes/inventoryRoutes');
const salesRoutes = require('./routes/salesRoutes');
const adminRoutes = require('./routes/adminRoutes');
const connectDB = require('./config/db'); // Import connectDB function
require('dotenv').config(); // Import dotenv to load .env variables
connectDB();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/inventory', inventoryRoutes);
app.use('/sales', salesRoutes);
app.use('/adminproduct', adminRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;
