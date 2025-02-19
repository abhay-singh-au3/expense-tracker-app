const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb://127.0.0.1:27017/expense-tracker',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
