//importing modules
const bcrypt = require("bcryptjs");
const db = require("../models");
const jwt = require("jsonwebtoken");
require('dotenv').config();


// Assigning users to the variable User
const User = db.User;

//signing a user up
//hashing users password before its saved to the database with bcrypt
const signup = async (req, res) => {
 try {
  
   const { name, surname,email,dob, city, studentgrade, password } = req.body;

   console.log( req.body, ' json body ', name, surname,email,dob, city, studentgrade, password);

   const data = {
    name,
    surname,
    email,
    dob,
    city,
    studentgrade,
    password: await bcrypt.hash(password, 10),
   };
   //saving the user
   const user = await User.create(data);

   //if user details is captured
   //generate token with the user's id and the secretKey in the env file
   // set cookie with the token generated
   if (user) {
     let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1d', // 1 day (24 hours)
     });

     res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
     console.log("user", JSON.stringify(user, null, 2));
     console.log(token);
     //send users details
    //  return res.status(201).send(user);
     return res.status(201).send({message: "User was registered successfully!"} );

   } else {
     return res.status(409).send("Details are not correct");
   }
 } catch (error) {
   console.log(error);
   return res.status(409).send(error);
 }
};


//login authentication
const login = async (req, res) => {
 try {
const { username, password } = req.body;
console.log(req.body, 'login body', username, password)
   //find a user by their email
   const user = await User.findOne({
     where: {
     email: username
   } 
     
   });

   //if user email is found, compare password with bcrypt
   if (user) {
     const isSame = await bcrypt.compare(password, user.password);

     //if password is the same
      //generate token with the user's id and the secretKey in the env file

     if (isSame) {
       let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: '1d', // 1 day (24 hours)
       });

       //if password matches wit the one in the database
       //go ahead and generate a cookie for the user
       res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
       console.log("user", JSON.stringify(user, null, 2));
       console.log(token);
       //send user data
       return res.status(201).send({message: "Successfully logged in!"});
     } else {
       return res.status(401).send("Authentication failed");
     }
   } else {
     return res.status(401).send("Authentication failed");
   }
 } catch (error) {
   console.log(error);
 }
};

//GET ALL 
const getUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.findAll();

    // Return the list of users
    // res.send({ message: "Users successfully retrieved!" });
    return res.status(200).send(users);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};



//GET BY ID 
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    if (user) {
      return res.status(200).send(user);
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const updateUserById = async (req, res) => {
  try {
    const userId = req.params.id; 
    const { name, surname, email, dob, city, studentgrade } = req.body;
    const data = {
      name,
      surname,
      email,
      dob,
      city,
      studentgrade,
    };
    const user = await User.findByPk(userId);
    if (user) {
      await User.update(data, {
        where: { id: userId },
      });
      // Fetch the updated user to return it
      const updatedUser = await User.findByPk(userId);
      return res.status(200).send(updatedUser);
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
  
};

//delete users
// DELETE BY ID
const deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id; 
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Perform the delete operation here
    await user.destroy();

    return res.status(200).send("User deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};



module.exports = {
 signup,
 login,
 getUsers,
 getUserById,
 updateUserById,
 deleteUserById
};