module.exports = {
  HOST: "localhost",
  PORT: "3306",
  USER: "root",
  PASSWORD: "Click123!",
  DB: "dbstu",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
