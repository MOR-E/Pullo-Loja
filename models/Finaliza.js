const Sequelize = require("sequelize");
const connection = require("../database/database");

const finaliza = connection.define('finaliza', {
    rua: {
        type: Sequelize.STRING,
        allowNull: false 
    },bairro: {
        type: Sequelize.STRING,
        allowNull: false
    },numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },complemento: {
        type: Sequelize.STRING,
        allowNull: false
    },cep: {
        type: Sequelize.INTEGER,
        allowNull: false
    },numero_cartao: {
        type: Sequelize.INTEGER,
        allowNull: false
    },cvv: {
        type: Sequelize.INTEGER,
        allowNull: false
    },nome: {
        type: Sequelize.STRING,
        allowNull: false
    },data_expiracao: {
        type: Sequelize.INTEGER,
        allowNull: false
    },email: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

//finaliza.sync({force:true});

module.exports = finaliza;