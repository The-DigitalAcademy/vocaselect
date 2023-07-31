const subjects = require('../controllers/subjects.controllers')
  
    const router = require("express").Router();
  
    router.post("/", subjects.createNewSubject);


    //for getting all subjects
    router.get("/", subjects.getAllsubjects);

  

    
  // routing for subjects and marks
  
    const subjectAndmarks = require('../controllers/subjects.controllers')

    router.get("/", subjectAndmarks.createsubjectAndMarks)



    module.exports = router


