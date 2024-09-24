const express = require('express');
const User = require('../models/User');
const router = express.Router();

// CREATE: New User Create
router.post('/users', async (req, res) => {
    //console.log('Received body:', req.body); // Log the incoming request body
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).send(user);
    } catch (err) {
      console.error('Error saving user:', err);
      res.status(400).send(err);
    }
  });
// READ: All User show
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

// UPDATE: User Update
router.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// DELETE: User DELETE
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
