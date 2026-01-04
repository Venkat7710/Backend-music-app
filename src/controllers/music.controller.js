const Track = require('../models/track.model');

// Get all tracks
exports.getAllTracks = async (req, res) => {
  try {
    const tracks = await Track.find().sort({ uploadDate: -1 });
    res.json(tracks);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Search tracks
exports.searchTracks = async (req, res) => {
  try {
    const { query } = req.query;
    const tracks = await Track.find({
      title: { $regex: query, $options: 'i' }
    });
    res.json(tracks);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Upload Track (Admin only logic handles in Route)
exports.uploadTrack = async (req, res) => {
  try {
    const { title, artist, album, duration } = req.body;
    // Assuming Multer handles the file upload and puts it in req.file
    const newTrack = new Track({
      title,
      artist,
      album,
      duration,
      url: `/uploads/${req.file.filename}`, // Local file path
      cover: req.body.coverUrl
    });
    
    await newTrack.save();
    res.json(newTrack);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
