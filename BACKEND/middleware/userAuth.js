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
   console.log(req.body.users?.email, 'testing on auth', req.body)
  //  checking if email already exist
   const emailcheck = await User.findOne({
     where: {
       email: req.body.users.email,
     },
   });

   console.log(req.body, 'testing on auth line 25')

  //  if email exist in the database respond with a status of 409
   if (emailcheck) {
     return res.json(204).send({message:"username already exists"});
   }

   next();
 } catch (error) {
   console.log(error, 'this is on auth');
   return res.json(204).send({message:"username already exists"});
 }
};

//exporting module
 module.exports = {
 saveUser,
};