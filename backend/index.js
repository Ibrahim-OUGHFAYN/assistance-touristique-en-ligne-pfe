const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const connectDB = require("./config/db");

// Initialize dotenv and the express app
dotenv.config();
const app = express();

// ✅ Correct - set the exact origin
app.use(
  cors({
    origin: "http://localhost:5173", // 👈 Your frontend Vite app
    credentials: true, // ✅ Allow cookies to be sent
  })
);

// Middleware setup
app.use(express.json()); // To parse JSON data
app.get("/test", (req, res) => {
  res.json({ msg: "hello" });
});

// Serve static files (assets) from a directory
app.use("/assets", express.static(path.join(__dirname, "assets")));

// Connect to the database
connectDB(process.env.MONGO_URI);

// Routes
app.use("/api/users", require("./routes/UserRoutes"));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
