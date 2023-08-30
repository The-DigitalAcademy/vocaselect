const db = require("../../models");
const User = db.User;
const Subject = db.Subject;
const UserSelectedSubject = require("../../models/selectedSubject.models");

exports.saveSelectedSubjects = async (req, res) => {
  var userSubjects = req.body;

  try {
    //loop through the selected user subjects
    for (var i = 0; i < userSubjects.length; i++) {
      //check if the userid provided is correct
      const user = await User.findByPk(userSubjects[i].userId);
      //check if the subjectid provided is correct
      const subject = await Subject.findByPk(userSubjects[i].subjectId);
      
      //check if the user and subject exists
      if (user && subject) {
        //add the subjet selected by the user
        await UserSelectedSubject.create({
          user_id: userSubjects[i].userId,
          subject_id: userSubjects[i].subjectId,
        });
      } else {
        //return an error message stating whether a userid or subjectId provided is incorrect 
        res.status(500).json({
          error: !user
            ? "Invalid user ID provided"
            : "Invalid subject ID privded",
        });
      }
    }

    //return successful message for adding subjects
    res.status(200).json({ message: "Selected subjects saved successfully" });
  } catch (error) {
    //console.log(error);
    res
      .status(500)
      .json({ error: "Failed to save selected subjects to the database" });
  }
};

exports.updateSelectedSubjects = async (req, res) => {
  var userSubjects = req.body;

  try {
    for (var i = 0; i < userSubjects.length; i++) {
      const selectedSubject = await UserSelectedSubject.findByPk(
        userSubjects[i].id
      );

      if (selectedSubject) {
        await UserSelectedSubject.update(
          { subject_marks: userSubjects[i].subject_marks },
          {
            where: { id: userSubjects[i].id },
          }
        );
      } else {
        res.status(500).json({
          error: "Invalid ID provided",
        });
      }
    }

    res.status(200).json({ message: "Subject marks saved successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Failed to save subject marks to the database" });
  }
};

exports.getSelectedSubjects = async (req, res) => {
  try {
    
    // get the user_id parameter from request parameters
    user_id = req.params.id;

    //fetch user selected subjects by user_id joining it with subjects table to get the subject name
    const selectedSubjects = await db.sequelize.query(
      "select s.* ,us.id as selectedid, us.user_id, us.subject_id, us.subject_marks from subjects s join user_selected_subjects us on us.subject_id = s.id where us.user_id = " +
        user_id
    ); 
    console.log(selectedSubjects, "successful");

    // Return the list of user selected subjects
    return res.status(200).send(selectedSubjects[0]);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};