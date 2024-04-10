// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
})
// Categories have many Products
Category.hasMany(Product, {
  forignKey: 'category_id',
})
// Products belongToMany Tags (through ProductTag)
Product.hasMany(Tag, {
  forignKey: 'product_id',
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsTo(Product, {
  foreignKey: 'product_id',
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
