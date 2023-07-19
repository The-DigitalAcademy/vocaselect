module.exports = (sequelize, Sequelize) => {
    const VocaSelect = sequelize.define("vocaselects", {
        name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATE
      },
      city: {
        type: Sequelize.STRING
      },
      studentgrade: {
        type: Sequelize.INTEGER

      },
      password: {
        type: Sequelize.STRING

      }
    });
  
    return VocaSelect;
  };