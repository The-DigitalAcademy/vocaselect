const answers = require('../controllers/Database_quiz/quizAnswers.controller')

const router = require("express").Router();

 //for post all quiz answers
 router.post("/", answers.createNewQuizAnswers);

  //for getting all quiz answers
  router.get("/", answers.getAllQuizAnswers);

  module.exports = router