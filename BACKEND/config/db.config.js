
//HOSTED
require('dotenv').config();

module.exports = {
  HOST: process.env.DB_HOST,
  //username
  USER: process.env.DB_USERNAME, 
  PASSWORD: process.env.DB_PASSWORD,
  //database name
  DB: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
  pool: {
    max: parseInt(process.env.DB_POOL_MAX),
    min: parseInt(process.env.DB_POOL_MIN),
    acquire: parseInt(process.env.DB_POOL_ACQUIRE),
    idle: parseInt(process.env.DB_POOL_IDLE),
  },
};


//FOR LOCAL DEVELOPMENT
// module.exports = {
//     HOST: 'dpg-cirtcuh5rnujejth4tgg-a.oregon-postgres.render.com',
//     USER: 'vocaselect_user',
//     PASSWORD: 'CQMcwiQvQyYiLzZ2YKqptEikc3pTlrrc',
//     DB: 'vocaselect',
//     port: 5432,
//     dialect: 'postgres',
//     pool: {
//       max: 15,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
// };

