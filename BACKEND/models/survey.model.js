module.exports = (sequelize, Sequelize) => {
    const Survey = sequelize.define("survey", {
      surveyQuestion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  
    Survey.associate = (models) => {
      // Associate survey with User (one-to-many relationship)
      Survey.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
      });
    };
  
    return Survey;
  };
  