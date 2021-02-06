const Result = require("./model");
const { resultValidation } = require("../../services/validation");

// Get all results
const getAllResultsController = async (req, res) => {
  try {
    const results = await Result.find(req.query);
    res.json(results);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Get a result
const getAResultController = async (req, res) => {
  try {
    const results = await Result.findById(req.params.resultId);
    res.json(results);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Get a result
const addAResultController = async (req, res) => {
  try {
    // Validation
    const { error } = resultValidation(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // save the result
    const result = new Result(req.body);
    const savedResult = await result.save();
    res.json(savedResult);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Exports
module.exports.getAllResultsController = getAllResultsController;
module.exports.getAResultController = getAResultController;
module.exports.addAResultController = addAResultController;
