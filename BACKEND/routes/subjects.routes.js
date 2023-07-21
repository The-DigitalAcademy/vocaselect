// importing modules
const express = require('express');
const subjectController = require('../controllers/subjects.controllers');
const { createSubjectMark, getAllSubjectMarks, getSubjectById, updateSubjectMark, deleteSubjectMark } = subjectController;


const router = express.Router();

// Route to create a new subject
router.post('/', createSubjectMark);

// Route to get all subjects
router.get('/subjects', getAllSubjectMarks);

// Route to get a subject by ID
// router.get('/subjects/:id', getSubjectById);

// Route to update a subject by ID
router.put('/subjects/:id', updateSubjectMark);

// Route to delete a subject by ID
router.delete('/subjects/:id', deleteSubjectMark);

module.exports = router;


// module.exports = {
//     createSubjectMark,
//     getAllSubjectMarks,
//     updateSubjectMark,
//     deleteSubjectMark,
//   };