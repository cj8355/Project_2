<<<<<<< HEAD
// import models
const Product = require('./Product');
const Category = require('./Category');
const Size = require('./Size');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Product.belongsToMany(Size, {
//   through: 'ProductSizes'
// });
// Size.belongsToMany(Product, {
//   through: 'ProductSizes'
// });
module.exports = {
  Product,
  Category,
  Size
};
=======
const User = require('./User');
const Post = require('./Post');

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Post
};
>>>>>>> main
