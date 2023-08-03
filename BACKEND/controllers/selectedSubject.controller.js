const User = require('../models/users.models');
const Subject = require('../models/subjects.model');
const UserSelectedSubject = require('../models/selectedSubject.models');

exports.saveSelectedSubjects = async (req, res) => {
  const userId = req.params.userId; // Assuming you can get the user ID from the request

  if (!userId) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  const selectedIds = req.body;

  // Save the selected subject IDs to the database and associate them with the user ID
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Find the subjects corresponding to the selected IDs
    const subjects = await Subject.findAll({
      where: {
        subject_id: selectedIds,
      },
    });

    // Create associations in the junction table (user_selected_subjects)
    await Promise.all(
      subjects.map((subject) =>
        UserSelectedSubject.create({
          user_id: userId,
          subject_id: subject.subject_id,
        })
      )
    );

    res.status(200).json({ message: 'Selected subjects saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save selected subjects to the database' });
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