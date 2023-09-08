module.exports = (sequelize, Sequelize) => {
  const Users  = sequelize.define("users", {
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

  // User.associate = (models) => {
  //   User.belongsToMany(models.Subject, {
  //     through: models.UserSubject,
  //     as: "selectedSubjects",
  //     foreignKey: "userId",
  //   });
  // };

  // Define the association with Career model
  // Users.hasMany(sequelize.models.Career, {
  //   foreignKey: 'user_id', // Assuming your foreign key is named user_id
  // });


  return Users;
};