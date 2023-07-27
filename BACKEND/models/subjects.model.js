
module.exports = (sequelize, Sequelize) => {
    const Subject = sequelize.define("subject", {
        subjectName: {
        type: Sequelize.STRING,
        allowNull: false,
        
           notEmpty:true
        
      },

      // mark: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //  validator:{
      //   isInt: true, // Should be an integer
      //   min: 1, // Minimum value for studentgrade
      //   max: 12, // Maximum value for studentgrade
      //  }
       
      // }
      // Add other fields related to subjects as needed
    });
  
    Subject.associate = (models) => {
      // Associate Subject with User (one-to-many relationship)
      Subject.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
      });
    };

    /// for marks and subject

    const SubjectAndMark = sequelize.define("subject", {
      subjectName: {
      type: Sequelize.STRING,
      allowNull: false,
      
         notEmpty:true
      
    },

    mark: {
      type: Sequelize.INTEGER,
      allowNull: false,
     validator:{
      isInt: true, // Should be an integer
      min: 1, // Minimum value for studentgrade
      max: 12, // Maximum value for studentgrade
     }
     
    }
    // Add other fields related to subjects as needed
  });

  Subject.associate = (models) => {
    // Associate Subject with User (one-to-many relationship)
    Subject.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  
    return Subject, SubjectAndMark;
  };
  