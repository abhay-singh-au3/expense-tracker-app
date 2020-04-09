const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please add an email to know whose expense it is'],
  },
  amount: {
    type: Number,
    required: [true, 'Please add the amount of the expense'],
  },
  name: {
    type: String,
    required: [true, 'Please add the the name of the expense'],
  },
  desc: {
    type: String,
    required: [true, 'Please add a detailed description of the expense'],
  },
  category: {
    type: String,
    required: [true, 'Please add an category for the expense'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Expense', ExpenseSchema);
