const express = require("express");
const quizController = require("../controllers/quizController");

const router = express.Router();


/**
 * @swagger
 * /quiz:
 *   post:
 *     summary: Receive quiz questions and answers, and get career recommendations.
 *     description: Returns career recommendations based on the user's quiz answers and traits.
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
 *                 description: The quiz answers provided by the user.
 *             example:
 *               answers: ["Technology", "Creativity", "Collaborative", "Extremely important", "Yes, occasionally", "Mid-level", "Yes"]
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
 *                   description: The recommended career choices based on the user's quiz responses and traits.
 *             example:
 *               recommendations: ["Software Engineer", "Graphic Designer", "Data Scientist", "Marketing Specialist", "UX/UI Designer"]
 *       500:
 *         description: Internal server error occurred.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating the cause of the error.
 *             example:
 *               error: "An error occurred while processing the quiz and generating career recommendations."
 */

router.post("/", quizController.generateQuizRecommendations);

module.exports = router;
