const db = require("../models")
const Survey = db.Survey;

require('dotenv').config();

// create new survey to postgres table

const createsurvey = async (req, res) => {
    try {
      const { surveyQuestion } = req.body;
      const data = {
        surveyQuestion,
        
      };
      //saving the quiz
      console.log(data  )
      const survey = await Survey.create(data);
      
   
      //if survey details is captured
      if (survey) {
        console.log("survey", JSON.stringify(survey, null, 2));
      
        //send survey details
        return res.status(201).send(survey);
      } else {
        return res.status(409).send("Details are not correct");
      }
    } catch (error) {
      console.log(error);
    }
   };

   module.exports = {
    createsurvey
    }



