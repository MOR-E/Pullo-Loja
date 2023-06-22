const Sequelize = require("sequelize");

const connection = new Sequelize('railway','root', '3Rx23Trszd7KmSiJDG9q', {
    host: 'containers-us-west-158.railway.app',
    dialect: 'mysql',
    timezone: "-03:00",
    port: 7600,
    username: 'root',
    password: '3Rx23Trszd7KmSiJDG9q',
    database: 'railway',

});

module.exports = connection;