<<<<<<< HEAD
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    dialect: 'mysql',
    host: 'localhost',
});
=======
const { Sequelize, Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: "localhost",
  }
);
>>>>>>> Hoang_BackEnd

// ----- IMPORTANT -----
// If force = true, everytime the server runs we will lose the data for the table
// force = true recreates a table
<<<<<<< HEAD
sequelize.sync({ force: false });

(async() => {
=======

sequelize.sync({ force: false, alter: true });

(async () => {
>>>>>>> Hoang_BackEnd
  try {
    await sequelize.authenticate();
    console.log("database connect successfully");
  } catch (error) {
    console.log(error);
  }
})();

<<<<<<< HEAD
module.exports = sequelize;
=======
module.exports = sequelize;
>>>>>>> Hoang_BackEnd
