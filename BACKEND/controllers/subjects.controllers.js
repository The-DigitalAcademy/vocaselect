const db = require("../models")
const Subject = db.Subject;
// const Op = db.Sequelize.Op;

// create new subjects to postgres table

  const createNewSubject = async (req, res) => {
    try {
      const { subjectName } = req.body;
      const data = {
       subjectName,
      //  mark,
      };
      //saving the subject
      const selectedsubject = await Subject.create(data);
   
      //if subject details is captured
      if (selectedsubject) {
        console.log("subject", JSON.stringify(selectedsubject, null, 2));
      
        //send subject details
        return res.status(201).send(selectedsubject);
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
    const selectedsubject = await Subject.findAll();

    // Return the list of subjects
    return res.status(200).send(selectedsubject);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

/// create subjects table with marks and it has to post only marks
// without subjects, more like updating mark 

const createsubjectAndMarks = async (req, res) => {
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
    createNewSubject,
    getAllsubjects,
    createsubjectAndMarks
   }