const Sequelize = require("sequelize")


const sequelize = new Sequelize("", "", "", {
    host: 'localhost', 
    dialect: "postgres"
})