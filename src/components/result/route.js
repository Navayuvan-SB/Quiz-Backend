const { userValidation } = require("../../services/validation");

// Import statements
const router = require("express").Router();
const { userVerification, adminVerification } = require("../../services/jwtVerification");
const {
  addAResultController,
  getAResultController,
  getAllResultsController,
} = require("./controller");

// Add a result
router.post("/", userVerification, addAResultController);

// Get a result
router.get("/:resultId", adminVerification, getAResultController);

// Get all results
router.get("/", adminVerification, getAllResultsController);

// Exports
module.exports = router;
