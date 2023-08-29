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


//for getting all subjects
router.get("/", subjects.getAllsubjects);

// Create the route for deleting a subject
router.delete('/:id', subjects.deleteSubjectById);


module.exports = router
