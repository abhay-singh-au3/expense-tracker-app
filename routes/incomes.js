const express = require('express');
const router = express.Router();
const {
  getIncomes,
  addIncome,
  deleteIncome,
  incomeData,
} = require('../controllers/incomes');

router.route('/').get(getIncomes).post(addIncome);

router.route('/:id').delete(deleteIncome);

router.route('/download/:category').get(incomeData);

module.exports = router;
