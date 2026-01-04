const mongoose = require('mongoose');

const TrackSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  album: String,
  duration: Number, // in seconds
  url: { type: String, required: true }, // Path to local file in /uploads
  cover: String,
  genre: String,
  uploadDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Track', TrackSchema);