const express = require('express');
const router = express.Router();
const { loginUser, signupUser, logoutUser } = require('../controllers/users');

router.route('/login').post(loginUser);

router.route('/signup').post(signupUser);

router.route('/logout').get(logoutUser);

module.exports = router;
