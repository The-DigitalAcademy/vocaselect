module.exports = app => {
    const subjects = require("../controllers/subjects.controllers");
  
    var router = require("express").Router();
  
    // Create a new subjects
    
    router.post("/postsubjects", subjects.create);
  
    // app.use('/api/subjects', router);
  };


