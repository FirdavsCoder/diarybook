const Sequelize = require("sequelize")


const sequelize = new Sequelize("diarybook", "postgres", "firdavs2007", {
    host: 'localhost', 
    dialect: "postgres"
})


module.exports = sequelize