const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Ensure this folder exists in backend root
  },
  filename: function (req, file, cb) {
    // Clean filename to remove spaces/special chars if needed, or keep original
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('audio/')) {
    cb(null, true);
  } else {
    cb(new Error('Not an audio file!'), false);
  }
};

module.exports = multer({ storage: storage, fileFilter: fileFilter });