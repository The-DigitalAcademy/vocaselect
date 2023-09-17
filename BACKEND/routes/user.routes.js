
const express = require('express')
const userController = require('../controllers/User/user.controllers')
// const { signup, login } = userController
const userAuth = require('../middleware/userAuth')
const { sendResetOTP, resetPassword } = require('../controllers/User/user.controllers'); 
const router = express.Router()


/**
 * @swagger
 * /api/users/signup:
 *   post:
 *     summary: Create a new user
 *     description: Register a new user.
 *     tags: [User Authentication]
 *     parameters:
 *       - name: body
 *         in: body
 *         description: User object that needs to be registered.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             surname:
 *               type: string
 *             email:
 *               type: email@gmail.com
 *             dob:
 *               type: string
 *               format: date
 *             city:
 *               type: string
 *             studentGrade:
 *               type: 8
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: User registration successful
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/signup', userAuth.saveUser, userController.signup)


/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: User login
 *     tags: [User Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: email@gmail.com
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 token:
 *                   type: string
 *                 user:
 *                   $ref: '#/components/schemas/UserInfo'
 *       401:
 *         description: Authentication failed
 */
router.post('/login', userController.login )


/**
 * @swagger
 * /api/users/getAll:
 *   get:
 *     summary: Get all users
 *     description: Get all users in the application.
 *     tags: [User Authentication]
 *   
 *     responses:
 *       200:
 *         description: All users retrieved.
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.get("/getAll",  userController.getUsers);


/**
 * @swagger
 * /api/users/getUserById/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [User Authentication]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the user to retrieve
 *     responses:
 *       200:
 *         description: User retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 *         content:
 *           text/plain:
 *             example: User not found
 *       500:
 *         description: Internal Server Error
 *         content:
 *           text/plain:
 *             example: Internal Server Error
 */
router.get('getUserById/:id', userController.getUserById)

// @DELETE Method
// /**
//  * @swagger
//  * /api/users/{id}:
//  *   delete:
//  *     summary: Delete a user by ID
//  *     tags: [User Authentication]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: integer
//  *         required: true
//  *         description: ID of the user to delete
//  *     responses:
//  *       200:
//  *         description: User deleted successfully
//  *         content:
//  *           text/plain:
//  *             example: User deleted successfully
//  *       404:
//  *         description: User not found
//  *         content:
//  *           text/plain:
//  *             example: User not found
//  *       500:
//  *         description: Internal Server Error
//  *         content:
//  *           text/plain:
//  *             example: Internal Server Error
//  */
router.delete('/:id', userController.deleteUserById);


// @UPDATE Method
/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update a user by ID
 *     tags: [User Authentication]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 *         content:
 *           text/plain:
 *             example: User not found
 *       500:
 *         description: Internal Server Error
 *         content:
 *           text/plain:
 *             example: Internal Server Error
 */



/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         surname:
 *           type: string
 *         email:
 *           type: string
 *         dob:
 *           type: string
 *         city:
 *           type: string
 *         studentgrade:
 *           type: string
 */

router.put('/:id', userController.updateUserById);


// Route to check if email exists
router.get("/emailExist/:email", userController.emailExists);

// route  for the update users
router.put('/:id', userController.updateUserById)

router.post('/sendresetotp', sendResetOTP);

// Endpoint to reset password
router.post('/resetpassword', resetPassword);
module.exports = router