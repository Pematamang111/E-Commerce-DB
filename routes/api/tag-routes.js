const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tags = Tag.findAll();
  res.json(tags);
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tag = Tag.findOne(req.params.id);
  res.json(tag);
});

router.post('/', (req, res) => {
  // create a new tag
  const newTag = Tag.create(req.body);
  res.json(newTag);
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  const updateTag = Tag.update(req.body, {
    where: {id: req.params.id}
  })
  res.json(updateTag);
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  const deleteTag = Tag.destroy({where: {id: req.params.id}});
  res.json(deleteTag);
});

module.exports = router;
