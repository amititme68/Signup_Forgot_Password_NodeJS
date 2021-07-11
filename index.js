const express = require("express");
const cors = require('cors');
require('dotenv').config();
require('./db/connectDB');
const app = express();

// Routes import
const authRoutes = require('./routes/auth');

app.use(express.json()); 
app.use(cors());

// middlewares
app.use('/api',authRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));