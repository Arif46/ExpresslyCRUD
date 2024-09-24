const express = require('express');
const Category = require('../models/Category');
const router = express.Router();

// CREATE: New User Create
router.post('/categories', async (req, res) => {
    //console.log('Received body:', req.body); // Log the incoming request body
    try {
      const category = new Category(req.body);
      await category.save();
      res.status(201).send({
        message: 'User created successfully',
        status: 'Success',
        category: category
      });
    } catch (err) {
      console.error('Error saving user:', err);
      res.status(400).send(err);
    }
  });
// READ: All User show
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (err) {
    res.status(500).send(err);
  }
});

// UPDATE: User Update
router.put('/categories/:id', async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!category) {
      return res.status(404).send();
    }
    res.send(category);
  } catch (err) {
    res.status(400).send(err);
  }
});

// DELETE: User DELETE
router.delete('/categories/:id', async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).send();
    }
    res.send(category);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
