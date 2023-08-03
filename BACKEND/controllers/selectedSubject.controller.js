const db = require("../models");
const User = db.User;
const Subject = db.Subject;
const UserSelectedSubject = require("../models/selectedSubject.models");

exports.saveSelectedSubjects = async (req, res) => {
  var userSubjects = req.body;

  try {
    for (var i = 0; i < userSubjects.length; i++) {
      const user = await User.findByPk(userSubjects[i].userId);
      const subject = await Subject.findByPk(userSubjects[i].subjectId);

      if (user && subject) {
        UserSelectedSubject.create({
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
