const survey = require('../controllers/survey.controller')

const router = require("express").Router();


//for post all quiz
router.post("/", survey.createsurvey);

module.exports = router
