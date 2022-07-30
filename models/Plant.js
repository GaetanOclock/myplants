const { Sequelize, DataTypes, Model } = require('sequelize');
const database = require('../utils/database');
const Species = require('./Species');

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
        },
        species_id: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize: database,
        modelName: 'Plant',
        tableName: 'plants'
    }
);

module.exports = Plant;