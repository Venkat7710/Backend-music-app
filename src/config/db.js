const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // UPDATED: Removed deprecated options (useNewUrlParser, useUnifiedTopology)
    // as they are default in Mongoose 6+
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
