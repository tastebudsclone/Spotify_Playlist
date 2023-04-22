const User = require('../models/user.model');
const createError = require('http-errors');

module.exports.exist = (req, res, next) => {
  const userId = req.params.userId || req.params.id;

  User.findById(userId)
    .then((user) => {
      if(student) {
        req.user = user;
        next();
      } else {
        next(createError(404, 'User not found'));
      }
    })
    .catch(next);
}