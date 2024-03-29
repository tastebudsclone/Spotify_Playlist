const Playlist = require('../models/playlist.model');
const Like = require('../models/like.model');
const createError = require('http-errors');
const {getRecommendations, getSeveralTracks} = require('../config/spotify.config');

module.exports.list = async (req, res, next) => {
  try {
    const playlists = await Playlist.find().populate('likes').populate('owner')
    res.json({data: playlists})
  } catch(error) {
    next(error)
  }
}

module.exports.detail = async (req, res, next) => {
  try {
    const playlist = await Playlist.findById(req.params.id)
      .populate('owner')
      .populate('likes')
    const trackInfo = await getSeveralTracks(playlist.tracks)
    const tracks = trackInfo.tracks
    res.json({data: playlist, tracks})
  } catch(error) {
    next(error)
  }
}

//TO DO ARTIST ATTRIBUTE AND POPULATE IN USER
module.exports.create = async (req, res, next) => {
  try {
    if (req.body.title.split(',').join('').trim().length === 0) {
      next(createError(400, "Please provide the playlist with a title"))
    } else if (req.body.artistsName.split(',').join('').trim().length === 0) {
      next(createError(400, "Bad request with artist's names"))
    } else if (req.body.artistsName.split(',').length > 5) {
      next(createError(400, "Please no more than 5 artists"))
    } else {
      console.log('body', req.body.artistsName.split(',').join('').trim().length)
      const tracks = await getRecommendations(req.body);
      const tracksID = tracks.map(track => track.id);
      const artistsIds = tracks.map(x => x.artists[0].id)
      const playlistImgs = tracks.map(track => track.album.images[1].url)
      
      const playlist = await Playlist.create({title: req.body.title, images: playlistImgs, tracks: tracksID, owner: req.user.id});

      req.user.artists = [...req.user.artists, ...artistsIds]
      await req.user.save();

      res.status(201).json(playlist); }
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
