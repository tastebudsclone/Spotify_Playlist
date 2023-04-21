const User = require('../models/user.model');
const createError = require('http-errors');

module.exports.profile = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return next(createError(404, 'User not found'))
      }
      res.json(user)
    })
    .catch(next)
};

module.exports.create = (req, res, next) => {
  User.create(req.body)
    .then((user) => res.status(201).json(user))
    .catch(next)
}

module.exports.settings = (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(createError(403, 'Forbidden'))
  }

  Object.assigs(req.user, req.body);

  req.user
    .save()
    .then((user) => res.json(user))
    .catch(next);
}