require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoute = require('./route/AuthRoute.js');

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");

const PORT = process.env.PORT || 8080;
const url = process.env.MONGO_URL;

const app = express();

app.use(cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL], 
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(cookieParser());
app.use(express.json({strict: true}));

app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});

app.use('/auth', authRoute);

app.get('/allHoldings', async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching holdings', error: err.message });
  }
});

app.get('/allPositions', async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching positions', error: err.message });
  }
});

mongoose.connect(url, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000
})
.then(() => {
  console.log("✅ DB connected!");
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});