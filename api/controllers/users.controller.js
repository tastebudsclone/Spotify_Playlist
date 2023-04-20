const User = require('../models/user.model');
const createError = require('http-errors');

module.exports.profile = (req, res, next) => {
  User.findOne({ userId: req.params.id })
    .populate('playlists')
    .then((user) => {
      if (!user) {
        return next(createError(404, 'User not found'))
      }
      res.json(user)
    })
    .catch(next)
};