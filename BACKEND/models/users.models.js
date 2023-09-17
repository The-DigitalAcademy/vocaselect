module.exports = (sequelize, Sequelize) => {
  const Users  = sequelize.define("user", {
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
      type: Sequelize.DATE,
      allowNull: false
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false
    },
    studentgrade: {
      type: Sequelize.STRING,
      allowNull: false

    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });



  return Users;
};