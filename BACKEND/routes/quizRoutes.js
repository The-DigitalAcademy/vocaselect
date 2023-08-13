const express = require("express");
const quizController = require("../controllers/OpenAI/quizController");

const router = express.Router();


/**
 * @swagger
 * /quiz:
 *   post:
 *     summary: Get career recommendations based on quiz answers.
 *     description: Returns career recommendations tailored to the user's preferences and traits.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               answers:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: List of user's quiz answers.
 *                 example: ["answer1":"reading books", answer2:"outgoing and creative",    "answer3":"teamwork or individual work ", "answer4":"Maths and Science (STEM)", "answer5":"dynamic work environment", "answer6":"drawn to unpredictability", "answer7":"growth opportunities", "answer8": "learn many skills", "answer9":"", "answer10":""]
 *             required:
 *               - answers
 *     responses:
 *       200:
 *         description: Successful response with career recommendations.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 recommendations:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: List of recommended careers based on user's quiz responses.
 *                   example: ["Software Engineer", "Graphic Designer", "Data Scientist", "Marketing Specialist", "UX/UI Designer"]
 *       400:
 *         description: Bad request due to missing or invalid input.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Description of the validation error.
 *                   example: "Invalid input data. Please provide valid answers."
 *       500:
 *         description: Internal server error occurred.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Description of the internal error.
 *                   example: "An error occurred while processing the quiz and generating career recommendations."
 */

// router.post("/", quizController.generateQuizRecommendations);

router.post('/', quizController.generateCareerQuiz);

module.exports = router;
