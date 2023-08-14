// module.exports = (sequelize, Sequelize) => {
//     const SubjectMark  = sequelize.define("subjects", {
//         //change DataTypes back Sequelize - if it breaks
//         subjectName: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       mark: {
//         type: Sequelize.STRING,
//         allowNull: false
//       }
      
//     });
  
//     return SubjectMark;
//   };


// models/subject.js
module.exports = (sequelize, Sequelize) => {
  const Subject = sequelize.define("subject", {
      subjectName: {
      type: Sequelize.STRING,
      allowNull: false,
      validator:{
        notEmpty:true
      }
    },

  });

  // Subject.associate = (models) => {
  //   // Associate Subject with User (one-to-many relationship)
  //   Subject.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false,
  //     },
  //   });
  // };

  // Subject.associate = (models) => {
  //   // Associate Subject with User (one-to-many relationship)
  //   Subject.hasMany(models.UserSelectedSubject);
  // };

  return Subject;
};
