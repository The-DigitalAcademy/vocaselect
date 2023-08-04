
// const { DataTypes } = require('sequelize');
// const { sequelize } = require('../models');
// const db = require('../models'); // Make sure to replace '../models' with the actual path to your Sequelize setup file

// const UserSelectedSubject = sequelize.define('user_selected_subjects', {
//   // You can add other properties to the junction table if needed
//   user_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   subject_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
// });

// module.exports = UserSelectedSubject;

module.exports = (sequelize, Sequelize) => {
    const UserSubject = sequelize.define("userSubject", {});
  
    return UserSubject;
  };


