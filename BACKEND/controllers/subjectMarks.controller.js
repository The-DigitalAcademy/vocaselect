const db = require("../models");
const Subject = db.Subject;

// ... (existing code)

exports.getSubjectMarks = async (req, res) => {
  try {
    // Fetch subject marks from the database
    const subjects = await Subject.findAll();

    return res.status(200).send(subjects);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }

};
exports.saveSubjectMarks = async (req, res) => {
    const { userId, subjectId, marks } = req.body;
  
    try {
      const userSubject = await UserSelectedSubject.findOne({
        where: { user_id: userId, subject_id: subjectId },
      });
  
      if (userSubject) {
        userSubject.marks = marks;
        await userSubject.save();
        res.status(200).json({ message: 'Subject marks updated successfully' });
      } else {
        res.status(404).json({ error: 'User-subject combination not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to update subject marks' });
    }
  };