const express = require('express');
const router = express.Router();

const { getAllCategory, addCategory } = require('../controllers/users');

router.route('/').get(getAllCategory).post(addCategory);

module.exports = router;
