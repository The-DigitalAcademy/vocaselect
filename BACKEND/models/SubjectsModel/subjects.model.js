
module.exports = (sequelize, Sequelize) => {
  const Subject = sequelize.define("subject", {
      subjectName: {
      type: Sequelize.STRING,
      allowNull: false, //validation
      validator:{
        notEmpty:true
      }
    },

  });

  return Subject;
};
