const Sequelize = require("sequelize")


const sequelize = new Sequelize("diarybook", "postgres", "firdavs2007", {
    host: 'localhost', 
    dialect: "postgres"
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.diary = require("./diary.model")(sequelize, Sequelize)
db.comment = require("./comment.model")(sequelize, Sequelize)


db.diary.hasMany(db.comment, {as: 'comment'})
db.comment.belongsTo(db.diary, {
    foreignKey: "diaryId",
    as: "diary",
    onDelete: "CASCADE",
    constraints: true
})



module.exports = db