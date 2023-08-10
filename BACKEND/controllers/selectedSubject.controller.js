const db = require("../models");
const User = db.User;
const Subject = db.Subject;
const UserSelectedSubject = require("../models/selectedSubject.models");

exports.saveSelectedSubjects = async (req, res) => {
  var userSubjects = req.body;
  console.log(userSubjects)
  try {
    for (var i = 0; i < userSubjects.length; i++) {
      const user = await User.findByPk(userSubjects[i].userId);
      console.log(user,'user info')
      const subject = await Subject.findByPk(userSubjects[i].subjectId);
      console.log(subject,'subject info')
      if (user && subject) {
       await UserSelectedSubject.create({
          user_id: userSubjects[i].userId,
          subject_id: userSubjects[i].subjectId,
        });
      } else {
        res.status(500).json({
          error: !user
            ? "Invalid user ID provided"
            : "Invalid subject ID privded",
        });
      }
    }

    res.status(200).json({ message: "Selected subjects saved successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Failed to save selected subjects to the database" });
  }
};

exports.updateSelectedSubjects = async (req, res) => {
  var userSubjects = req.body;
  console.log(userSubjects)
  try {
    for (var i = 0; i < userSubjects.length; i++) {
      const user = await User.findByPk(userSubjects[i].user_id);
      console.log(user,'user info')
      const subject = await Subject.findByPk(userSubjects[i].subject_id);
      console.log(subject,'subject info')

     const selectedSubject = await UserSelectedSubject.findByPk(userSubjects[i].id);
     console.log(selectedSubject,'selectedSubject info')

     if (user && subject && selectedSubject) {
      await UserSelectedSubject.update(userSubjects[i], {
        where: { id: userSubjects[i].id },
      });
     } else {
       res.status(500).json({
         error: !user
           ? "Invalid user ID provided"
           : "Invalid subject ID privded",
       });
     }
    }

    res.status(200).json({ message: "Selected subjects saved successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Failed to save selected subjects to the database" });
  }
};

exports.getSelectedSubjects= async (req, res) => {
  try {
    // Fetch all users from the database
    const selectedSubjects = await UserSelectedSubject.findAll();

    // Return the list of users
    // res.send({ message: "Users successfully retrieved!" });
    return res.status(200).send(selectedSubjects);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};


// const Subject = require('../models/selectedSubject.models');

// exports.saveSelectedSubjects = async (req, res) => {
//   const selectedIds = req.body;

//   // Save the selected subject IDs to the database
//   try {
//     const result = await Subject.saveSelectedSubjects(selectedIds);
//     if (result) {
//       res.status(200).json({ message: 'Selected subjects saved successfully' });
//     } else {
//       res.status(500).json({ error: 'Failed to save selected subjects to the database' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to save selected subjects to the database' });
//   }
// };
