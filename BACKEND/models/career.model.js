// careers.model.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Career = sequelize.define('Career', {
    careerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    careerDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    careerSalary: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

   // Define the association with User model
   Career.belongsTo(sequelize.models.User, {
    foreignKey: 'user_id', // Assuming your foreign key is named user_id
    onDelete: 'CASCADE', // Optional: This ensures that if a user is deleted, their associated careers are also deleted
  });
  
  return Career;
};