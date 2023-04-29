const Playlist = require('../models/playlist.model');
const Like = require('../models/like.model');
const createError = require('http-errors');
const {getRecommendations, example} = require('../config/spotify.config');

module.exports.list = (req, res, next) => {
  Playlist.find()
    .then((playlists) => res.json({data: playlists}))
    .catch(next);
}

//TO DO ARTIST ATTRIBUTE AND POPULATE IN USER
module.exports.create = async (req, res, next) => {
  try {
    const tracks = await getRecommendations(req.body);
    const tracksID = tracks.map(track => track.id);
    const artistsIds = tracks.map(x => x.artists[0].id)
    
    const playlist = await Playlist.create({name: req.body.name, tracks: tracksID, owner: req.user.id});

    req.user.artists = [...req.user.artists, ...artistsIds]
    await req.user.save();

    res.status(201).json(playlist);
  } catch (error) {
    next(error)
  }
}

module.exports.delete = (req, res, next) => {
  Playlist.findByIdAndDelete(req.params.id)
    .then((playlist) => {
      if (!playlist) {
        next(createError(404, 'Playlist doesn´t exist'))
      } else {
        res.status(204).send()
      }
      })
    .catch(next)
}

module.exports.toggle = (req, res, next) => {
  const params = {
    playlist: req.params.id,
    user: req.user.id,
  };

  Like.findOne(params)
    .then((like) => {
      if (like) {
        return Like.deleteOne({ _id: like.id })
          .then(() => res.status(204).send())
      } else {
        return Like.create(params)
          .then((like) => res.json(like))
      }
    })
    .catch(next);
};
