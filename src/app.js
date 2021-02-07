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
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("Connected to DB"))
  .catch((err) => console.log(err));

// Middlewares
app.use(express.json());

// Mock Request
app.get("/", (req, res) => {
  res.send("<h1>API is working fine!</h1>");
});

// Routes
app.use("/user", userRoute);
app.use("/quiz", quizRoute);
app.use("/result", resultRoute);

// Port
const PORT = env.process.PORT || 3000;

// Listen
app.listen(PORT, () => {
  console.log("Server up and running at 3000");
});
