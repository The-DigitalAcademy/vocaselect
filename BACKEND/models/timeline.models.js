
module.exports = (sequelize, Sequelize) => {
    const Timeline  = sequelize.define("timelines", {
        //change DataTypes back Sequelize - if it breaks
        grade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
        title: {
        type: Sequelize.STRING,
        allowNull: false
      },
        description: {
        type: Sequelize.STRING,
        allowNull: false
      },
    });

  
  
    return Timeline;
  };