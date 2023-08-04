// const User = require('../models/user.models');
// const Subject = require('../models/subjects.model');
// const UserSelectedSubject = require('../models/selectedSubject.models');


// userSubject.controller.js

const db = require("../models");
const User = db.user;
const Subject = db.subject;
const UserSubject = db.userSubject;

// Function to link a user to selected subjects
exports.linkUserToSubjects = async (req, res) => {
  try {
    const { userId, subjectIds } = req.body;

    // Find the user and the subjects by their IDs
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    const subjects = await Subject.findAll({ where: { id: subjectIds } });
    if (subjects.length !== subjectIds.length) {
      return res.status(404).send({ message: "One or more subjects not found." });
    }

    // Link the user to the selected subjects
    await user.addSelectedSubjects(subjects);

    return res.status(200).send({ message: "User linked to subjects successfully." });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};



// exports.saveSelectedSubjects = async (req, res) => {
//   const userId = req.params.userId; // Assuming you can get the user ID from the request

//   if (!userId) {
//     return res.status(400).json({ error: 'Invalid user ID' });
//   }

//   const selectedIds = req.body;

//   // Save the selected subject IDs to the database and associate them with the user ID
//   try {
//     const user = await User.findByPk(userId);
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     // Find the subjects corresponding to the selected IDs
//     const subjects = await Subject.findAll({
//       where: {
//         subject_id: selectedIds,
//       },
//     });

//     // Create associations in the junction table (user_selected_subjects)
//     await Promise.all(
//       subjects.map((subject) =>
//         UserSelectedSubject.create({
//           user_id: userId,
//           subject_id: subject.subject_id,
//         })
//       )
//     );

//     res.status(200).json({ message: 'Selected subjects saved successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to save selected subjects to the database' });
//   }
// };
