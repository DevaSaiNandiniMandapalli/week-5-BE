const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Transaction = sequelize.define('Transaction', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    accountId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Accounts',
            key: 'id'
        }
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Transaction;
