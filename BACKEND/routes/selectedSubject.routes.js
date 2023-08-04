
const express = require("express");
const router = express.Router();
const userSubjectController = require("../controllers/selectedSubject.controller");

// Route for linking a user to selected subjects
router.post("/linkUserToSubjects", userSubjectController.linkUserToSubjects);

module.exports = router;



// const express = require('express');
// const router = express.Router();
// const subjectController = require('../controllers/selectedSubject.controller');

// router.post('/users/:userId', subjectController.saveSelectedSubjects);

// module.exports = router;


