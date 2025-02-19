const Incomes = require('../models/Incomes');
const { Parser } = require('json2csv');

// @desc    GET all incomes of the current user
// @route   GET /incomes
// @access  Private
exports.getIncomes = async (req, res, next) => {
  try {
    const incomes = await Incomes.find({ email: req.email });

    return res.status(200).json({
      success: true,
      count: incomes.length,
      data: incomes,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong!',
    });
  }
};

// @desc    add income of the current user
// @route   POST /incomes
// @access  Private
exports.addIncome = async (req, res, next) => {
  try {
    const incomeData = {
      email: req.email,
      amount: req.body.amount,
      name: req.body.name,
      desc: req.body.desc,
      category: req.body.category,
    };
    const income = await Incomes.create(incomeData);

    return res.status(201).json({
      success: true,
      data: income,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        message: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: 'Something went wrong!',
      });
    }
  }
};

// @desc    DELETE the income of the current user by its ID
// @route   DELETE /incomes/:id
// @access  Private
exports.deleteIncome = async (req, res, next) => {
  try {
    const income = await Incomes.findById(req.params.id);

    if (!income) {
      return res.status(404).json({
        success: false,
        message: 'No income found',
      });
    }

    await income.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong!',
    });
  }
};

// @desc    Respond with csv data of incomes
// @route   GET /incomes/download/:category OR /incomes/download
// @access  Private
exports.incomeData = async (req, res, next) => {
  try {
    let income;
    if (req.params.category !== 'all') {
      income = await Incomes.find({
        email: req.email,
        category: req.params.category,
      });
    } else {
      income = await Incomes.find({ email: req.email });
    }
    const fields = [
      {
        label: 'Income Name',
        value: 'name',
      },
      {
        label: 'Amount USD',
        value: 'amount',
      },
      {
        label: 'Income Desc',
        value: 'desc',
      },
      {
        label: 'Income Category',
        value: 'category',
      },
    ];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(income);
    res.status(200).send(csv);
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong!',
    });
  }
};
