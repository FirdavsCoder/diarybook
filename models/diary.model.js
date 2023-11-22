const {Sequelize, DataTypes} = require("sequelize")

const sequelize = require("../config/db")

const Diary = sequelize.define('diary', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    text: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING(1000),
        allowNull: true
    }
}, {
    timestamps: true
})


module.exports = Diary