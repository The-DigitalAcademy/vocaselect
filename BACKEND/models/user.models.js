// module.exports = (sequelize, Sequelize) => {
//     const User  = sequelize.define("user", {
//         //change DataTypes back Sequelize - if it breaks
        
//         name: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       surname: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       email: {
//         type: Sequelize.STRING,
//         unique: true,
//         isEmail: true, //checks for email format
//         allowNull: false
//       },
//       dob: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       city: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       studentgrade: {
//         type: Sequelize.INTEGER,
//         allowNull: false

//       },
//       password: {
//         type: Sequelize.STRING,
//         allowNull: false
//       }
//     });
  
//     return User;
//   };


///  modified code


const Quiz = require('../models/quiz.model');

module.exports = (sequelize, Sequelize) => {
  const User  = sequelize.define("user", {
      //change DataTypes back Sequelize - if it breaks
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    surname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      isEmail: true, //checks for email format
      allowNull: false
    },
    dob: {
      type: Sequelize.STRING,
      allowNull: false
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false
    },
    studentgrade: {
      type: Sequelize.INTEGER,
      allowNull: false

    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  

User.hasMany(Quiz, { foreignKey: 'userId' });
Quiz.belongsTo(User, { foreignKey: 'userId' });

  return User;
};