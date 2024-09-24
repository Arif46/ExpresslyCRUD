const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true, // Ensure that the ID is required
        unique: true // Make sure the ID is unique
      },
      title: {
        type: String,
        required: true // Title is required
      },
      description: {
        type: String,
        required: true // Description is required
      },
      item_count: {
        type: Number,
        default: 0 // Default to 0 if not provided
      },
      is_active: {
        type: String,
        enum: ['y', 'n'], // Ensure is_active can only be 'y' or 'n'
        default: 'y' // Default to 'y' if not provided
      }
    });

const Category = mongoose.model('Category', userSchema);
module.exports = Category;
