const { Sequelize, DataTypes, Model } = require('sequelize');
const database = require('../utils/database');

class Species extends Model {}

Species.init({  
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        scientificName: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        waterNeeded: {
            type: DataTypes.INTEGER
        },
        lightNeeded: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize: database,
        modelName: 'Species',
        tableName: 'species'
    }
);

module.exports = Species;