module.exports = (sequelize, Sequelize) => {
    const subjects  = sequelize.define("subjects", {
        //change DataTypes back Sequelize - if it breaks
        subjectName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mark: {
        type: Sequelize.STRING,
        allowNull: false
      }
      
    });
  
    return subjects;
  };