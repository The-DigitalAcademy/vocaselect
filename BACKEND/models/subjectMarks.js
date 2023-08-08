const UserSelectedSubject = sequelize.define('user_selected_subjects', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    marks: {
      type: DataTypes.INTEGER, // You can adjust the data type as needed
      allowNull: true,
    },
    // ...
  });