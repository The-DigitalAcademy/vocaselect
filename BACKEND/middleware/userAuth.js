//importing modules
const express = require("express");
const db = require("../models");
const jwt = require("jsonwebtoken");
//Assigning db.users to User variable
 const User = db.User;

 const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

//Function to check if username or email already exist in the database
 const saveUser = async (req, res, next) => {
 
 try {
  const { email } = req.body;
   console.log(email);
   // Check if req.body and req.body.users exist
  //  if (!req.body || !req.body.users || !req.body.users.email) {
  //     return res.status(400).json({ message: "Invalid request data" });
  //  }

  // Check if email already exists
   const emailExists = await User.findOne({ where: { email: email } });


   // If email already exists, respond with a 409 status code (Conflict)
   if (emailExists) {
     return res.status(409).send({message:"username already exists"});
   }
   next();
   
 } catch (error) {
  console.error(error);
    // Handle other errors here and send an appropriate response
    return res.status(500).json({ message: "Internal server error" });
 }
};


//exporting module
 module.exports = {
 saveUser, 
 verifyToken
};