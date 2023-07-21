// importing modules
const express = require('express');
const subjectController = require('../controllers/subjects.controllers');
const { createSubjectMark, getAllSubjectMarks, updateSubjectMark, deleteSubjectMark } = subjectController;


const router = express.Router();

// Route to create a new subject
router.post('/subject', createSubjectMark);

// router.post('/signup', userAuth.saveUser, signup)

// Route to get all subjects
router.get('/', getAllSubjectMarks);



// Route to get a subject by ID
// router.get('/subjects/:id', getSubjectById);

// Route to update a subject by ID
router.put('/subjects/:id', updateSubjectMark);

// Route to delete a subject by ID
router.delete('/subjects/:id', deleteSubjectMark);

module.exports = router;



