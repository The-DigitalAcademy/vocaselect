// backend/routes/selectedSubjects.js
const express = require('express');
const router = express.Router();
const Subject = require('../models/subjects.model');

// POST route to save selected subjects
router.post('/user_selected_subjects', async (req, res) => {
  try {
    const selectedSubjects = req.body.selectedSubjects;
    // Assuming selectedSubjects is an array of subject IDs received from the frontend

    // You can perform additional validation if needed, e.g., checking if the subjects exist in the database

    // Save the selected subjects to the database
    const savedSubjects = await Subject.create(selectedSubjects);

    res.status(201).json(savedSubjects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to store selected subjects' });
  }
});

module.exports = router;
