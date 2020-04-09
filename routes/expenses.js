const express = require('express');
const router = express.Router();
const {
  getExpenses,
  addExpense,
  deleteExpense
} = require('../controllers/expenses');

router
  .route('/')
  .get(getExpenses)
  .post(addExpense);

router.route('/:id').delete(deleteExpense);

module.exports = router;
