const subjects = require('../controllers/Subjects/subjects.controllers')
  
const router = require("express").Router();


/**
 * @swagger
 * /api/subjects:
 *   post:
 *     summary: Create a new subject
 *     tags: [Subjects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SubjectInput'
 *     responses:
 *       201:
 *         description: Subject created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 *       409:
 *         description: Details are not correct
 *         content:
 *           text/plain:
 *             example: Details are not correct
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     SubjectInput:
 *       type: object
 *       properties:
 *         subjectName:
 *           type: string
 *         mark:
 *           type: number
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Subject:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         subjectName:
 *           type: string
 *         mark:
 *           type: number
 */
router.post("/", subjects.createNewSubject);



/**
 * @swagger
 * /api/subjects/getAll:
 *   get:
 *     summary: Get all subjects
 *     tags: [Subjects]
 *     description: Returns a list of all subjects.
 *     responses:
 *       200:
 *         description: Successful response with the list of subjects.
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 name: Mathematics
 *               - id: 2
 *                 name: Science
 *       500:
 *         description: Internal server error.
 */
router.get("/getAll", subjects.getAllsubjects);

// Create the route for deleting a subject
router.delete('/:id', subjects.deleteSubjectById);


module.exports = router
