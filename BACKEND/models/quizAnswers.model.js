module.exports = (sequelize, Sequelize) => {

    const QuizAnswer  = sequelize.define('QuizAnswer', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      questionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      selectedOption: {
        type: Sequelize.ARRAY(Sequelize.STRING), // Using ARRAY data type to store an array of strings
        allowNull: false,
      },
    });
  
      return QuizAnswer;
    };