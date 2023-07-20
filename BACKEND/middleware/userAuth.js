//importing modules
const express = require("express");
const db = require("../models");

require('dotenv').config()

//Assigning db.users to User variable
 const User = db.User;

//Function to check if username or email already exist in the database
//this is to avoid having two users with the same username and email
 const saveUser = async (req, res, next) => {
 
//search the database to see if user exist
//redunt code - for testing purpose 
 try {
   
   //checking if email already exist
//    const emailcheck = await User.findOne({
//      where: {
//        email: req.body.email,
//      },
//    });

//    //if email exist in the database respond with a status of 409
//    if (emailcheck) {
//      return res.json(409).send("Authentication failed");
//    }

   next();
 } catch (error) {
   console.log(error);
 }
};

const getUsers = async (req, res) => {
    try {
      // Fetch all users from the database
      const users = await User.findAll();
  
      // Return the list of users
      return res.status(200).send(users);
    } catch (error) {
      console.log(error);
      return res.status(500).send("Internal Server Error");
    }
};

//exporting module
 module.exports = {
 saveUser,
 getUsers
};