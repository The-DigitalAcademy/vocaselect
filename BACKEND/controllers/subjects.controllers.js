const db = require("../models")
const Subject = db.Subject;
// const Op = db.Sequelize.Op;



exports.create = (req, res) => {
    // Validate request
    const {subjectName, mark } = req.body;
    if (!req.body) {
        console.log(subjectName, mark )

      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a subjects
    const subjectMark = {
        subjectName: req.body.subjectName,
      mark: req.body.mark,
    //   published: req.body.published ? req.body.published : false
    };
  
    // Save subjects in the database
    Subject.create(subjectMark)
      .then(data => {
        res.send(subjectMark);
        console.log(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the subjects."
        });
      });
  };

// Create and Save a new Tutorial

// exports.create = (req, res) => {
//     // Validate request
//     if (!req.body.title) {
//       res.status(400).send({
//         message: "Content can not be empty!"
//       });
//       return;
//     }
  
//     // Create a meditation
//     // @POST
//     const Subject = {
//       title: req.body.title,
//       description: req.body.description,
//       image: req.body.image,
//       duration: req.body.duration,
//       sounds: req.body.sounds,
//       quotes: req.body.quotes,
//       slogans: req.body.slogans
//       //URL SOUNDS 
//     //   subjectName: req.body.subjectName,
// //       mark: req.body.mark,
//     };
  
//     // Save Tutorial in the database
//     Subject.create(meditation)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while creating the Meditation Category."
//         });
//       });
//   };





