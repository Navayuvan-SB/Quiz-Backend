// IMPORTS
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Route imports
const userRoute = require("./components/user/route");
const quizRoute = require("./components/quiz/route");
const resultRoute = require("./components/result/route");

// Express instance
const app = express();

// Cors config
app.use(cors());

// dotenv config
dotenv.config();

// Connect Mongoose
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

// Middlewares
app.use(express.json());

// Routes
app.use("/user", userRoute);
app.use("/quiz", quizRoute);
app.use("/result", resultRoute);

// Listen
app.listen(3000, () => {
  console.log("Server up and running at 3000");
});
