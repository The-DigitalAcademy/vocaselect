const db = require("../models")
const Subject = db.Subject;
// const Op = db.Sequelize.Op;





// exports.create = (req, res) => {
//     // Validate request
//     const {subjectName, mark } = req.body;
//     if (!req.body) {
//         console.log(subjectName, mark )

//       res.status(400).send({
//         message: "Content can not be empty!"
//       });
//       return;
//     }
  
//     // Create a subjects
//     const subjectMark = {
//         subjectName: req.body.subjectName,
//       mark: req.body.mark,
//     //   published: req.body.published ? req.body.published : false
//     };
  
//     // Save subjects in the database
//     Subject.create(subjectMark)
//       .then(data => {
//         res.send(subjectMark);
//         console.log(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while creating the subjects."
//         });
//       });
//   };


  const createNewSubject = async (req, res) => {
    try {
      const { subjectName, mark } = req.body;
      const data = {
       subjectName,
       mark,
      };
      //saving the subject
      const subject = await Subject.create(data);
   
      //if subject details is captured
      if (subject) {
        console.log("subject", JSON.stringify(subject, null, 2));
      
        //send subject details
        return res.status(201).send(subject);
      } else {
        return res.status(409).send("Details are not correct");
      }
    } catch (error) {
      console.log(error);
    }
   };

   module.exports = {
    createNewSubject
   }