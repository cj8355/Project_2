// Creating the fake blog posts model
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogPost extends Model {}

BlogPost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: true,
    },
     user_id: {
       type: DataTypes.INTEGER,
       references: {
         model: 'user',
         key: 'id',
       },
     },
     imageSrc: {
      type: DataTypes.TEXT,
      allowNull: true,
     }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogPost',
  }
);

module.exports = BlogPost;