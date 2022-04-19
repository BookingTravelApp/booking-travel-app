const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    dialect: 'mysql',
    host: 'localhost',
});

// ----- IMPORTANT -----
// If force = true, everytime the server runs we will lose the data for the table
// force = true recreates a table



sequelize.sync({ force: false, alter: true });


(async() => {
  try {
    await sequelize.authenticate();
    console.log('database connect successfully');
  } catch (error) {
    console.log(error);
  }
})();



module.exports = sequelize;