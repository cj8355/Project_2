const sequelize = require('../config/connection.js')
const {Model, DataTypes } = require('sequelize')

class Size extends Model {}

Size.init(
{
    // Define columns
id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
},
size_name: {
    type: DataTypes.STRING,
    allowNull: false,
}
}, 
{
sequelize,
timestamps: false,
freezeTableName: true,
underscores: true,
modelName: 'size'
}
)

module.exports = Size;