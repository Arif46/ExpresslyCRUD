const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // This field is required
  },
  email: {
    type: String,
    required: true, // This field is required
    unique: true // Optional: Makes sure email is unique
  },
  age: {
    type: Number
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
