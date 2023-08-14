module.exports = (sequelize, Sequelize) => {
    const Users  = sequelize.define("users", {
        //change DataTypes back Sequelize - if it breaks
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
  
  
    return Users;
  };