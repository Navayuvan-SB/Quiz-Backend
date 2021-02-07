// Import statements
const Quiz = require("./model");
const axios = require("axios").default;

// Add a quiz
const addQuizController = async (req, res) => {
  // Quiz Data
  var quizData = {};
  quizData["createdBy"] = req.user.id;

  //   URL Generation
  var apiURL = "https://opentdb.com/api.php?amount=10";
  if (req.body.difficulty) {
    apiURL += `&difficulty=${req.body.difficulty}`;
    quizData["difficulty"] = req.body.difficulty;
  }

  if (req.body.type) {
    apiURL += `&type=${req.body.type}`;
    quizData["type"] = req.body.type;
  }

  if (req.body.category) {
    apiURL += `&category=${req.body.category}`;
    quizData["categoryId"] = req.body.category;
  }

  // Hit a request
  try {
    const data = await axios.get(apiURL);

    // Handle errors
    if (data.data.response_code == 1) {
      return res
        .status(400)
        .send("Not enough questions for the options you mentioned");
    }

    if (data.data.response_code == 2) {
      return res.status(400).send("Contains an invalid parameter");
    }
    quizData["questions"] = data.data.results;
    quizData["name"] = req.body.name;
    quizData["categoryName"] = req.body.categoryName;
    const quiz = new Quiz(quizData);

    const quizSaved = await quiz.save();

    return res.json(quizSaved);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

// Get quiz categories
const getQuizGenDataController = async (req, res) => {
  try {
    const data =  {
      trivia_categories: [
        { id: 9, name: "General Knowledge" },
        { id: 10, name: "Entertainment: Books" },
        { id: 11, name: "Entertainment: Film" },
        { id: 12, name: "Entertainment: Music" },
        { id: 13, name: "Entertainment: Musicals & Theatres" },
        { id: 14, name: "Entertainment: Television" },
        { id: 15, name: "Entertainment: Video Games" },
        { id: 16, name: "Entertainment: Board Games" },
        { id: 17, name: "Science & Nature" },
        { id: 18, name: "Science: Computers" },
        { id: 19, name: "Science: Mathematics" },
        { id: 20, name: "Mythology" },
        { id: 21, name: "Sports" },
        { id: 22, name: "Geography" },
        { id: 23, name: "History" },
        { id: 24, name: "Politics" },
        { id: 25, name: "Art" },
        { id: 26, name: "Celebrities" },
        { id: 27, name: "Animals" },
        { id: 28, name: "Vehicles" },
        { id: 29, name: "Entertainment: Comics" },
        { id: 30, name: "Science: Gadgets" },
        { id: 31, name: "Entertainment: Japanese Anime & Manga" },
        { id: 32, name: "Entertainment: Cartoon & Animations" },
      ],
    };
    const response = {
      categories: data.trivia_categories,
      difficulty: [
        { label: "Hard", value: "hard" },
        { label: "Medium", value: "medium" },
        { label: "Easy", value: "easy" },
      ],
      types: [
        { label: "Multiple Choice", value: "multiple" },
        { label: "True / False", value: "boolean" },
      ],
    };
    return res.json(response);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

// Get all quizzes
const getAllQuizzesController = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    return res.json(quizzes);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

// Get all quizzes
const getQuizController = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.quizId);
    return res.json(quiz);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const deleteQuizController = async (req, res) => {
  try {
    const deletedResponse = await Quiz.remove({
      _id: req.params.quizId,
    });
    return res.json(deletedResponse);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

// Exports
module.exports.addQuizController = addQuizController;
module.exports.getQuizGenDataController = getQuizGenDataController;
module.exports.getAllQuizzesController = getAllQuizzesController;
module.exports.getQuizController = getQuizController;
module.exports.deleteQuizController = deleteQuizController;
