//importing modules
const express = require('express')
const userController = require('../controllers/user.controllers')
const { signup, login } = userController
const userAuth = require('../middleware/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
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