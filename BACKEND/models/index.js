const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
// const db = require("../models/subjects.model");

//importing modules
// const {Sequelize, DataTypes} = require('sequelize')

//for environment file
require('dotenv').config();

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // You may need to adjust this option based on your SSL certificate configuration
    }
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

// username: process.env.DB_USERNAME,

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./users.models")(sequelize, Sequelize);
db.Subject = require("./SubjectsModel/subjects.model")(sequelize, Sequelize);
db.Timeline = require("../models/timeline.models")(sequelize, Sequelize);
db.Career = require("../models/careers.model")(sequelize, Sequelize); 


module.exports = db;



