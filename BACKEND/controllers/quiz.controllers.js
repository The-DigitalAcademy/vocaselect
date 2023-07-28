const { DataTypes } = require('sequelize');

const db = require("../models")
const Quiz = db.Quiz;

require('dotenv').config();



// create new quiz to postgres table

const createQuiz = async (req, res) => {
    try {
      const { quizQuestion } = req.body;
      const data = {
        quizQuestion,
        
      };
      //saving the quiz
      console.log(data  )
      const quiz = await Quiz.create(data);
      
   
      //if quiz details is captured
      if (quiz) {
        console.log("quiz", JSON.stringify(quiz, null, 2));
      
        //send quiz details
        return res.status(201).send(quiz);
      } else {
        return res.status(409).send("Details are not correct");
      }
    } catch (error) {
      console.log(error);
    }
   };


// get all quiz questions

const getQuizQuestions = async (req, res) => {
    try {
      // Fetch all quizies from the database
      const quiz = await Quiz.findAll();
  
      // Return the list of quiz
      return res.status(200).send(quiz);
    } catch (error) {
      console.log(error);
      return res.status(500).send("Internal Server Error");
    }
  };



   module.exports = {
   createQuiz,
   getQuizQuestions
   }