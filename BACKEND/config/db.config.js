module.exports = {
    HOST: 'dpg-cirtcuh5rnujejth4tgg-a.oregon-postgres.render.com',
    USER: 'vocaselect_user',
    PASSWORD: 'CQMcwiQvQyYiLzZ2YKqptEikc3pTlrrc',
    DB: 'vocaselect',
    port: 5432,
    dialect: 'postgres',
    pool: {
      max: 15,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };