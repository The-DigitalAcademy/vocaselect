



//importing modules
const express = require('express')
const userController = require('../controllers/user.controllers')
const { signup, login } = userController
const userAuth = require('../middleware/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Create a new user
 *     description: Register a new user.
 *     tags: [User]
 *     parameters:
 *       - name: body
 *         in: body
 *         description: User object that needs to be registered.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             -username:
 *               type: string
 *             -email:
 *               type: string
 *             -password:
 *               type: string
 *     responses:
 *       200:
 *         description: User registration successful
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/signup', userAuth.saveUser, signup)
// app.use('/api/users', userRoutes)


//login route
router.post('/login', login )

// Route to get all users
router.get("/getAll", userAuth.verifyToken, userController.getUsers);

// Route to check if email exists
router.get("/emailExist/:email", userController.emailExists);

// Create the route for deleting a user
router.delete('/:id', userController.deleteUserById);


module.exports = router