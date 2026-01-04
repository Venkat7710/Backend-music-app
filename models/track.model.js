const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, default: 'Unknown Artist' },
  audioUrl: { type: String, required: true }, // Filename in uploads folder
  coverUrl: { type: String, default: 'default-cover.png' },
  category: { type: String, enum: ['Music', 'Podcast'], default: 'Music' }
});

module.exports = mongoose.model('Track', trackSchema);