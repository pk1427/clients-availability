const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String, // Include this field for future use, even if not used yet
    required: true
  },
});

module.exports = mongoose.model('User', UserSchema);
