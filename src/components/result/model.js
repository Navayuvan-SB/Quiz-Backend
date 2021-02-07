// Import statements
const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  noOfCorrectAnswers: {
    type: Number,
    required: true,
  },
  noOfWrongAnswers: {
    type: Number,
    required: true,
  },
  noOfTotalQuestions: {
    type: Number,
    required: true,
  },
  timeTaken: {
    type: String,
    required: true,
  },
  quizId: {
    type: String,
    required: true,
  },
  quizName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("results", resultSchema);
