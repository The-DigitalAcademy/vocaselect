const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

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

db.User = require("./user.models.js")(sequelize, Sequelize);
// db.users = require("./users.model.js")(sequelize, Sequelize);


module.exports = db;
