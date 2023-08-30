const subjects = require('../controllers/Subjects/subjects.controllers')
  
    const router = require("express").Router();
  
    router.post("/", subjects.createNewSubject);


    //for getting all subjects
    router.get("/", subjects.getAllsubjects);

    // Create the route for deleting a subject
    router.delete('/:id', subjects.deleteSubjectById);


    module.exports = router
