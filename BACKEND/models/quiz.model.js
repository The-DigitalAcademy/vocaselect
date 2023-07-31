module.exports = (sequelize, Sequelize) => {
  const Quiz = sequelize.define("quiz", {
    quizQuestion: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  Quiz.associate = (models) => {
    // Associate quiz with User (one-to-many relationship)
    Quiz.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Quiz;
};
