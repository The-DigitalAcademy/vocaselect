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

  return Career;
};
