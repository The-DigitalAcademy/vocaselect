const bcrypt = require("bcryptjs");
const db = require("../models/subjects.model");

const jwt = require("jsonwebtoken");
const { CircleManager } = require("@agm/core");
require('dotenv').config();

// Assigning users and marks to the respective variables
const User = db.User;
const SubjectMark = db.SubjectMark;

//Function to create a new subject mark for a user
const createSubjectMark = async (req, res) => {
  try {
    const {subjectName, mark } = req.body;

    console.log(subjectName, mark )
    // Check if the user with the provided userId exists
    // const user = await User.findByPk(userId);

    // if (!user) {
    //   return res.status(404).send("User not found");
    // }
    
    const subjectMark = await SubjectMark.create({
      subjectName,
      mark
    });

    return res.status(201).send(subjectMark);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

// const createSubjectMark = (req, res) => {
//     // Validate request
//     const {subjectName, mark } = req.body;
//     if (!req.body) {
//         console.log(subjectName, mark )

//       res.status(400).send({
//         message: "Content can not be empty!"
//       });
//       return;
//     }
  
//     // Create a subjects
//     const subjectMark = {
//         subjectName: req.body.subjectName,
//       mark: req.body.mark,
//       published: req.body.published ? req.body.published : false
//     };
  
//     // Save subjects in the database
//     SubjectMark.create(subjectMark)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while creating the subjects."
//         });
//       });
//   };







// Function to get all subjects marks for a user
const getAllSubjectMarks = async (req, res) => {
  try {
    const { userId } = req.params;

    // Check if the user with the provided userId exists
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Get all subject marks for the user
    const subjectMarks = await SubjectMark.findAll({
      where: {
        userId,
      },
    });

    return res.status(200).send(subjectMarks);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

// Function to update a subject mark for a user
const updateSubjectMark = async (req, res) => {
  try {
    const { userId, markId } = req.params;
    const { subjectName, mark } = req.body;

    // Check if the user with the provided userId exists
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Check if the subject mark with the provided markId exists
    const subjectMark = await SubjectMark.findByPk(markId);

    if (!subjectMark) {
      return res.status(404).send("Subject mark not found");
    }

    // Update the subject mark
    subjectMark.subjectName = subjectName;
    subjectMark.mark = mark;
    await subjectMark.save();

    return res.status(200).send(subjectMark);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

// Function to delete a subject mark for a user
const deleteSubjectMark = async (req, res) => {
  try {
    const { userId, markId } = req.params;

    // Check if the user with the provided userId exists
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Check if the subject mark with the provided markId exists
    const subjectMark = await SubjectMark.findByPk(markId);

    if (!subjectMark) {
      return res.status(404).send("Subject mark not found");
    }

    // Delete the subject mark
    await subjectMark.destroy();

    return res.status(200).send("Subject mark deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  createSubjectMark,
  getAllSubjectMarks,
  updateSubjectMark,
  deleteSubjectMark,
};
