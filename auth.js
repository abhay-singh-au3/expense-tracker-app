// Checking if the user is loggedIn and protecting private routes

const jwt = require('jsonwebtoken');

const auth = function(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).send('Unuathorized: No token provided');
  } else {
    jwt.verify(token, 'secret', (err, decoded) => {
      if (err) {
        res.status(401).send('Unuathorized: Invalid token');
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
};

module.exports = auth;
