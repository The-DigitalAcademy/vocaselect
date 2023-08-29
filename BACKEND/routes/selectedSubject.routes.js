const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/Subjects/selectedSubject.controller');

router.post('/', subjectController.saveSelectedSubjects);

router.post('/update', subjectController.updateSelectedSubjects);
router.get('/:id', subjectController.getSelectedSubjects);

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const subjectController = require('../controllers/selectedSubject.controller');

// router.post('/', subjectController.saveSelectedSubjects);

// module.exports = router;