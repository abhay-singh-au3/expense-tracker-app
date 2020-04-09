const Users = require('../models/Users');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// @desc    Verify user credentials to login
// @route   POST /users/login
// @access  Public
exports.loginUser = async (req, res, next) => {
  Users.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        let token = jwt.sign({ email: user.email }, 'secret', {
          expiresIn: 1440,
        });
        res
          .cookie('token', token, { httpOnly: true, path: '/' })
          .sendStatus(200);
      } else {
        res.status(201).json({ success: false, message: 'Password is wrong' });
      }
    } else {
      res.status(201).json({ success: false, message: 'User does not exist' });
    }
  });
};

// @desc    Register user with credentials, hash password , create cookie with jwt token
// @route   POST /users/signup
// @access  Public
exports.signupUser = (req, res, next) => {
  const userData = {
    email: req.body.email,
    password: req.body.password,
  };

  Users.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          Users.create(userData).then((user) => {
            res.status(201).json({
              success: true,
              message: user.email + ' registered',
            });
          });
        });
      } else {
        res.status(200).json({
          success: false,
          message: 'User already exists!',
        });
      }
    })
    .catch((err) => {
      res.status(200).json({
        success: false,
        message: 'Something went wrong',
      });
    });
};

// @desc    Logout the user with removing the cookies
// @route   GET /users/logout
// @access  Public
exports.logoutUser = (req, res, next) => {
  res.clearCookie('token');
  return res.status(200).redirect('/');
};

exports.getAllCategory = async (req, res, next) => {
  Users.findOne({ email: req.email }, 'categories', (err, categories) => {
    res.status(200).json(categories);
  });
};

exports.addCategory = (req, res, next) => {
  Users.findOneAndUpdate(
    { email: req.email },
    { $push: { categories: req.body.category } },
    (err, info) => {
      if (err) {
        console.log(err);
      }
      res.sendStatus(200);
    }
  );
};
