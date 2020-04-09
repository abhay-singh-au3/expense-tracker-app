const express = require('express');
const router = express.Router();
const {
  getExpenses,
  addExpense,
  deleteExpense,
  expenseData,
} = require('../controllers/expenses');

router.route('/').get(getExpenses).post(addExpense);

router.route('/:id').delete(deleteExpense);

router.route('/download/:category').get(expenseData);

module.exports = router;
