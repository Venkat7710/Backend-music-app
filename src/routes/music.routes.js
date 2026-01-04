const express = require('express');
const router = express.Router();
const musicController = require('../controllers/music.controller');
const uploadMiddleware = require('../middlewares/upload.middleware'); // Multer config

// Get all music
router.get('/', musicController.getAllTracks);

// Search
router.get('/search', musicController.searchTracks);

// Upload (Post) - Add auth middleware here in real app
router.post('/upload', uploadMiddleware.single('audioFile'), musicController.uploadTrack);

module.exports = router;