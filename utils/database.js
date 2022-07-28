const { Sequelize } = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(config.dbName, config.dbUsername, config.dbPassword, {
    host: config.dbHost,
    port: config.dbPort,
    dialect: config.dbType
});

module.exports = sequelize;