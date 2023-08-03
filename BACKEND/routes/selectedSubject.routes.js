const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/selectedSubject.controller');

router.post('/', subjectController.saveSelectedSubjects);

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const subjectController = require('../controllers/selectedSubject.controller');

// router.post('/', subjectController.saveSelectedSubjects);

// module.exports = router;