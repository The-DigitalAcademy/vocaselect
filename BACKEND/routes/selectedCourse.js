const express = require("express");
const selectedCourseController = require("../controllers/OpenAI/courseInfo.controller");
const router = express.Router();


/**
 * @swagger
 * /selectedCourse:
 *   post:
 *     summary: Get recommendations for a preferred career choice
 *     description: Returns university and course recommendations for a specified career choice in South Africa.
 *     tags: [ChatGPT API]
 * 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               careerChoice:
 *                 type: string
 *                 description: The preferred career choice for which recommendations are needed.
 *             example:
 *               careerChoice: "Software Engineer"
 *     responses:
 *       200:
 *         description: Successful response with recommendations.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 recommendations:
 *                   type: string
 *                   description: The recommendations for the specified career choice.
 *             example:
 *               recommendations: "Here are some recommended universities and courses for a Software Engineer in South Africa..."
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
 *               error: "An error occurred while generating recommendations."
 */

// router.post("/", careerController.generateCareer);
// Define the route for generating career courses
router.post('/', selectedCourseController.selectedCourse);
router.get("/", selectedCourseController.getSelectedCourses);

module.exports = router;
