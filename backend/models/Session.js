// models/Session.js
const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  attendees: [{ name: String, email: String }],
  type: { type: String, required: true }, // e.g., 'one-on-one' or 'group'
});

module.exports = mongoose.model('Session', sessionSchema);
