const mongoose = require('mongoose');

const connectMongoDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/schoolDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
  }
};

module.exports = connectMongoDB;
