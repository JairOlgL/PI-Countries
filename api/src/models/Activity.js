const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('activity', {
        name: {
            type: DataTypes.STRING
        },
        difficulty: {
            type: DataTypes.INTEGER,
            validate: {
                isInt: true,
                min: 1,
                max: 5
            }
        },
        duration: {
            type: DataTypes.INTEGER,
            validate: {
                isInt: true,
                min: 0
            }
        },
        season: {
            type: DataTypes.ENUM('spring', 'summer', 'fall', 'winter')
        }
    }, {timestamps: false})
}