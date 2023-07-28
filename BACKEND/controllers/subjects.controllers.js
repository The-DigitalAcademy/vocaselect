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

// get all subjects

const getAllsubjects = async (req, res) => {
  try {
    // Fetch all users from the database
    const subject = await Subject.findAll();

    // Return the list of subjects
    return res.status(200).send(subject);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

// DELETE BY ID
const deleteSubjectById = async (req, res) => {
  try {
    const subjectId = req.params.id; 
    const subject = await User.findByPk(subjectId);

    if (!user) {
      return res.status(404).send("subject not found");
    }

    // Perform the delete operation here
    await user.destroy();

    return res.status(200).send("subject deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};


   module.exports = {
    createNewSubject,
    getAllsubjects,
    deleteSubjectById
   }