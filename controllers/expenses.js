const Expenses = require('../models/Expenses');

// @desc    GET all expenses of the current user
// @route   GET /expenses
// @access  Private
exports.getExpenses = async (req, res, next) => {
  try {
    const expenses = await Expenses.find({ email: req.email });

    return res.status(200).json({
      success: true,
      count: expenses.length,
      data: expenses
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong!'
    });
  }
};

// @desc    Add the expense of the current user
// @route   POST /expenses
// @access  Private
exports.addExpense = async (req, res, next) => {
  try {
    const expenseData = {
      email: req.email,
      amount: req.body.amount,
      name: req.body.name,
      desc: req.body.desc,
      category: req.body.category
    };
    const expenses = await Expenses.create(expenseData);

    return res.status(201).json({
      success: true,
      data: expenses
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        message: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        message: 'Something went wrong!'
      });
    }
  }
};

// @desc    DELETE the expense by its ID of the current user
// @route   DELETE /expenses/:id
// @access  Private
exports.deleteExpense = async (req, res, next) => {
  try {
    const expense = await Expenses.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({
        success: false,
        message: 'No income found'
      });
    }

    await expense.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong!'
    });
  }
};
