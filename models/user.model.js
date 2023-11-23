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
        },
        password: {
            type: Sequelize.STRING(80),
            allowNull: false
        },
        isAdmin: {
            type: Sequelize.BOOLEAN,
            default: false
        }
    }, {
        timestamps: true
    })
    return User
}
