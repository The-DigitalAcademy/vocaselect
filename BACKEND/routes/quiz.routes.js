const quiz = require('../controllers/quiz.controllers')

const router = require("express").Router();

 //for post all quiz
 router.post("/", quiz.createQuiz);

  //for getting all quiz
  router.get("/", quiz.getQuizQuestions);

  module.exports = router