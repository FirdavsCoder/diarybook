module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define('comment', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING(500),
            allowNull: false
        },
        comment: {
            type: Sequelize.STRING(1000),
            allowNull: true
        }
    }, {
        timestamps: true
    })
    return Comment
}
