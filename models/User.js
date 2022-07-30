const { Sequelize, DataTypes, Model } = require('sequelize');
const database = require('../utils/database');

class User extends Model {}

User.init({  
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize: database,
        modelName: 'User',
        tableName: 'users'
    }
);

module.exports = User;