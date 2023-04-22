const User = require('../models/user.model');
const createError = require('http-errors');
const jwt = require('jsonwebtoken');

module.exports.profile = (req, res, next) => {
  User.findById(req.params.id)
    .populate('playlists')
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

  Object.assign(req.user, req.body);

  req.user
    .save()
    .then((user) => res.json(user))
    .catch(next);
}

module.exports.login = (req, res, next) => {
  if (!req.body.password) {
    return next(createError(401, {errors: { password: 'Password is required'}}))
  }
  User.findOne({ username: req.body.username })
    .then((user) => {
      console.log(user)
      if (!user) {
        return next(createError(401, {errors: { password: 'Invalid credentials'}}));
      }

      user.checkPassword(req.body.password).then((match) => {
      if (!match) {
        return next(createError(401, {errors: { password: 'Invalid credentials'}}))
      }

      const token = jwt.sign(
        { sub: user.id, exp: Date.now() / 1000 + 3_600 },
        process.env.JWT_SECRET
      );
        console.log(req.user)
        res.json({ token, ...user.toJSON() })
      });  
    })
    .catch(next);
}