const db = require("../models");
const QuizAnswer = db.QuizAnswer;
// const Op = db.Sequelize.Op;

// create new subjects to postgres table

const createNewQuizAnswers = async (req, res) => {
// hery there
  const answers = req.body;

  console.log(answers)

  try {

    // Use Sequelize's bulkCreate method to insert all quiz answers into the database at once
    const createdAnswers = await QuizAnswer.bulkCreate(answers);
    console.log(createdAnswers, "   + mpelemane");

    res.json({ message: "Quiz answers stored successfully." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while storing quiz answers." });
  }
};

///

const getAllQuizAnswers = async (req, res) => {
  try {
    // Fetch all QuizAnswers from the database
    const selectedquizanswers = await QuizAnswer.findAll();

    // Return the list of answers
    return res.status(200).send(selectedquizanswers);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};





exports.saveSelectedSubjects = async (req, res) => {
  var userSubjects = req.body;

  try {
    for (var i = 0; i < userSubjects.length; i++) {
      const user = await User.findByPk(userSubjects[i].userId);
      const subject = await Subject.findByPk(userSubjects[i].subjectId);
      if (user && subject) {
       UserSelectedSubject.create({
          user_id: userSubjects[i].userId,
          subject_id: userSubjects[i].subjectId,
        });
      } else {
        res.status(500).json({
          error: !user
            ? "Invalid user ID provided"
            : "Invalid subject ID privded",
        });
      }
    }

    res.status(200).json({ message: "Selected subjects saved successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Failed to save selected subjects to the database" });
  }
};


module.exports = {
  createNewQuizAnswers,
  getAllQuizAnswers,
};




