const Sequelize = require("sequelize")


const sequelize = new Sequelize("diarybook", "postgres", "firdavs2007", {
    host: 'localhost', 
    dialect: "postgres"
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.diary = require("./diary.model")(sequelize, Sequelize)

module.exports = db