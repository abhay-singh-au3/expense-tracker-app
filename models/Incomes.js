const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please add an email to know whose income it is']
  },
  amount: {
    type: Number,
    required: [true, 'Please add the amount of the income']
  },
  name: {
    type: String,
    required: [true, 'Please add the the name of the income']
  },
  desc: {
    type: String,
    required: [true, 'Please add a detailed description of the income']
  },
  category: {
    type: String,
    required: [true, 'Please add an category for the income']
  }
});

module.exports = mongoose.model('Income', IncomeSchema);
