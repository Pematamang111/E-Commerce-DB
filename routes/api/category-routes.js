const router = require('express').Router();
const { Category, Product } = require('../../models');
const { seedCategories, seedProduct } = require('../../seeds');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categories = await Category.findAll();
  res.json(categories);
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const category = await Category.findOne(req.params.id);
  res.json(category);
});

router.post('/', async(req, res) => {
  // create a new category
  const newCategory = await Category.create(req.body);
  res.json(newCategory);
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  const updateCategory = await Category.update(req.body.id);
  res.json(updateCategory);
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  const deleteCategory = await Category.destroy(req.body.id);
  res.json(deleteCategory);
});

module.exports = router;
