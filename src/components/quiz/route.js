// Import statements
const router = require("express").Router();
const {
  userVerification,
  adminVerification,
} = require("../../services/jwtVerification");
const commonVerification = require("../../services/jwtVerification");
const {
  addQuizController,
  getQuizGenDataController,
  getAllQuizzesController,
  getQuizController,
  deleteQuizController,
} = require("./controller");

// Add a quiz
router.post("/", adminVerification, addQuizController);

// Get Quiz Generation data
router.get("/quiz-gen-data", commonVerification, getQuizGenDataController);

// Get all quizzes
router.get("/", commonVerification, getAllQuizzesController);

// Get all quizzes
router.get("/:quizId", commonVerification, getQuizController);

// Delete a quiz
router.delete("/:quizId", adminVerification, deleteQuizController);

// Exports
module.exports = router;
