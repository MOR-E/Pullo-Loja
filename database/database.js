const Sequelize = require("sequelize");

const connection = new Sequelize('finaliza','root', 'abc@123', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = connection;