const { DataTypes } = require('sequelize');
const { sequelize } = require('..');
// const db = require('../models'); // Make sure to replace '../models' with the actual path to your Sequelize setup file

const UserSelectedSubject = sequelize.define('user_selected_subjects', {
  // You can add other properties to the junction table if needed
    user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  subject_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    foreignKey: "subject_id" 
  },
  subject_marks: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  createdAt:{
    type: DataTypes.DATE,
    allowNull: true
  },
  createdAt:{
    type: DataTypes.DATE,
    allowNull: true
  }
});

UserSelectedSubject.associate = function (models) {
  console
  .log(models, 'asccociates');
  UserSelectedSubject.belongsTo(models.Subject, { as:'subject', foreignKey:'subject_id', onDelete: "cascade"});
  User.belongsTo(models.User, { as:'users', foreignKey:'user_id', onDelete: "cascade"});
  
};



module.exports = UserSelectedSubject;