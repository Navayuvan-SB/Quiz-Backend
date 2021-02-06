// Import statements
const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  questions: {
    type: Array,
    required: true,
  },
  difficulty: {
    type: String,
    min: 6,
    max: 255,
  },
  type: {
    type: String,
    min: 6,
    max: 255,
  },
  category: {
    type: String,
  },
  createdBy: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("quizzes", quizSchema);
