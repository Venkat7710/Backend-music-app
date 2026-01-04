require('dotenv').config();
const mongoose = require('mongoose');
const Track = require('./models/track.model');

// Sample data - Replace filenames with your actual local files
const songs = [
  { 
    title: "Oru Peru Varalaaru", 
    artist: "A.R. Rahman",
    url: "/uploads/Oru Peru Varalaaru (1).mp3" 
  },
  { 
    title: "Thalapathy Kacheri", 
    artist: "Vijay", 
    url: "/uploads/Thalapathy Kacheri (1).mp3"
  },
  // Add the rest of your 22-30 songs here following this pattern...
];

const seedData = async () => {
  try {
    // Connect directly without deprecated options
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected for Seeding');

    await Track.deleteMany(); // Clear existing data
    await Track.insertMany(songs);
    console.log('Data Imported Successfully');
    process.exit();
  } catch (error) {
    console.error('Error with data import', error);
    process.exit(1);
  }
};

seedData();