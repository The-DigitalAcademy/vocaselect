module.exports = (sequelize, DataTypes) => {
  const quizAnswers = sequelize.define('quizAnswers', {
    answer1: DataTypes.TEXT,
    answer2: DataTypes.TEXT,
    answer3: DataTypes.TEXT,
    answer4: DataTypes.TEXT,
    answer5: DataTypes.TEXT,
    answer6: DataTypes.TEXT,
    answer7: DataTypes.TEXT,
    answer8: DataTypes.TEXT,
    answer9: DataTypes.TEXT,
    answer10: DataTypes.TEXT,
  }, {});
  
  return quizAnswers;
};
