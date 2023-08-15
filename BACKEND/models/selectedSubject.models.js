// const { DataTypes } = require('sequelize');
// const { sequelize } = require('../models');
// // const db = require('../models'); // Make sure to replace '../models' with the actual path to your Sequelize setup file

// const SelectedSubject = sequelize.define('selectedSubject', {
//   subject_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
// });

// module.exports = {
//   async saveSelectedSubjects(selectedIds) {
//     try {
//       // Validate if selectedIds is an array of numbers
//       if (!Array.isArray(selectedIds) || selectedIds.some(isNaN)) {
//         throw new Error('Invalid selected IDs');
//       }

//       // Insert each selected ID into the database using Sequelize
//       await SelectedSubject.bulkCreate(
//         selectedIds.map((subjectId) => ({
//           subject_id: subjectId,
//         }))
//       );

//       return true;
//     } catch (error) {
//       return false;
//     }
//   },

//   SelectedSubject.associate = (models) => {
//     // Associate Subject with User (one-to-many relationship)
//     SelectedSubject.belongsTo(models.User, {
//       foreignKey: {
//         allowNull: false,
//       },
//     });
//   };
// };

const { DataTypes } = require('sequelize');
const { sequelize } = require('../models');
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