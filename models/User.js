// models/User.js

const mongoose = require('mongoose');

// Define the User Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'], // Email validation
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },

  date: {
    type: Date,
    default: Date.now,
  }
});

// Create and export the User model
const User = mongoose.model('User', UserSchema);
module.exports = User;
