const Sequelize = require("sequelize");
const connection = require("../database/database");

const finaliza = connection.define('finaliza', {
    rua: {
        type: Sequelize.TEXT,
        allowNull: false 
    },bairro: {
        type: Sequelize.TEXT,
        allowNull: false
    },numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },complemento: {
        type: Sequelize.TEXT,
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
        type: Sequelize.TEXT,
        allowNull: false
    },data_expiracao: {
        type: Sequelize.INTEGER,
        allowNull: false
    },email: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

finaliza.sync({force:false});

module.exports = finaliza;