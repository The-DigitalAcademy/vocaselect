const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/selectedSubject.controller');

router.post('/', subjectController.saveSelectedSubjects);

router.post('/update', subjectController.updateSelectedSubjects);
router.get('/', subjectController.getSelectedSubjects);

module.exports = router;



// const express = require('express');
// const router = express.Router();
// const subjectController = require('../controllers/selectedSubject.controller');

// router.post('/users/:userId', subjectController.saveSelectedSubjects);

// module.exports = router;


