const subjects = require('../controllers/subjects.controllers')
  
    const router = require("express").Router();
  
    router.post("/", subjects.createNewSubject);


    module.exports = router


