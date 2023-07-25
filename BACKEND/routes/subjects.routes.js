const subjects = require('../controllers/subjects.controllers')
  
    const router = require("express").Router();
  
    router.post("/", subjects.createNewSubject);


    //for getting all subjects
    router.get("/", subjects.getAllsubjects);

    module.exports = router


