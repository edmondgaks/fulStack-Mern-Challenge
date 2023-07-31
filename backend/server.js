const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const cors = require("cors");
const connectDB = require("./config/db")

const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use('/api/users', userRoutes);

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });