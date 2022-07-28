const { Sequelize, DataTypes, Model } = require('sequelize');
const database = require('../utils/database');

class Plant extends Model {}

Plant.init({  
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        picture: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize: database,
        modelName: 'Plant',
        tableName: 'plants'
    }
);

module.exports = Plant;