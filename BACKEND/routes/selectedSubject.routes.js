const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/selectedSubject.controllers');

router.post('/user_selected_subjects', subjectController.saveSelectedSubjects);

module.exports = router;