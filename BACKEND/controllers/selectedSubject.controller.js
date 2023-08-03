const Subject = require('../models/selectedSubject.models');

exports.saveSelectedSubjects = async (req, res) => {
  const selectedIds = req.body;

  // Save the selected subject IDs to the database
  try {
    const result = await Subject.saveSelectedSubjects(selectedIds);
    if (result) {
      res.status(200).json({ message: 'Selected subjects saved successfully' });
    } else {
      res.status(500).json({ error: 'Failed to save selected subjects to the database' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to save selected subjects to the database' });
  }
};