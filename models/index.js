// import models
const Product = require('./Product');
const Category = require('./Category');
const Size = require('./Size');
const User = require('./User');
const BlogPost = require('./blogPost');
const Comment = require('./comment');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

User.hasMany(BlogPost, {
  foreignKey: 'user_id'
});
//Post-User relationship
BlogPost.belongsTo(User, {
  foreignKey: 'user_id'
});

// Comment-User relationship
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
  hooks:true
});

// Comment-Post relationship
Comment.belongsTo(BlogPost, {
  foreignKey: 'blogPost_id',
  onDelete: 'cascade',
  hooks: true
});

// User-Comment relationsihp
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
  hooks:true
});

// Post-Comment relationship
BlogPost.hasMany(Comment, {
  foreignKey: 'blogPost_id',
  onDelete: 'cascade',
  hooks:true
})

// Product.belongsToMany(Size, {
//   through: 'ProductSizes'
// });
// Size.belongsToMany(Product, {
//   through: 'ProductSizes'
// });
module.exports = { Product, Category, Size, User, Comment, BlogPost };
