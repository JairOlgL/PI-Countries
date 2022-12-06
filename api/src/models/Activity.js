const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('activity', {
        name: {
            type: DataTypes.STRING
        },
        difficulty: {
            type: DataTypes.INTEGER,
            validate: {

            }
        },
        duration: {
            type: DataTypes.INTEGER
        },
        season: {
            type: DataTypes.ENUM('spring', 'summer', 'fall', 'winter')
        }
    }, {timestamps: false})
}