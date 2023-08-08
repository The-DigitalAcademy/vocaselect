const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/selectedSubject.controller');
const selectedSubjectController = require('../controllers/selectedSubject.controller');


router.post('/', subjectController.saveSelectedSubjects);
router.get('/', selectedSubjectController.getSubjectMarks);
router.post('/', subjectController.saveSubjectMarks);

module.exports = router;