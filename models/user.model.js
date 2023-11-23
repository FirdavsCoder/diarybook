module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING(255),
            allowNull: false,
            unique: true
        },
        name: {
            type: Sequelize.STRING(255),
            allowNull: false
        }
    }, {
        timestamps: true
    })
    return Diary
}
