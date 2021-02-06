// Import statements
const router = require("express").Router();
const {
  userVerification,
  adminVerification,
} = require("../../services/jwtVerification");
const {
  addQuizController,
  getQuizGenDataController,
  getAllQuizzesController,
  getQuizController,
  deleteQuizController,
} = require("./controller");

// Add a quiz
router.post("/", userVerification, addQuizController);

// Get Quiz Generation data
router.get("/quiz-gen-data", userVerification, getQuizGenDataController);

// Get all quizzes
router.get("/", userVerification, getAllQuizzesController);

// Get all quizzes
router.get("/:quizId", userVerification, getQuizController);

// Delete a quiz
router.delete("/:quizId", userVerification, deleteQuizController);

// Exports
module.exports = router;
