const Playlist = require('../models/playlist.model');
const createError = require('http-errors');
const {getRecommendations, example} = require('../config/spotify.config');

module.exports.list = (req, res, next) => {
  Playlist.find()
    .then((playlists) => res.json(playlists))
    .catch(next);
}

module.exports.createOnArtists = async (req, res, next) => {
  const tracks = await getRecommendations(req.body);
  const tracksID = tracks.map(track => track.id);
  console.log(tracks.map(x => x.artists[0].id))
  const artistsId = tracks.map(x => x.artists[0].id)
  Object.assign(req.user.artists, artistsId); //TODO

  req.user
    .save()
    .then(next)
    .catch(next);
  Playlist.create({name: req.body.name , tracks: tracksID, owner: req.user.id})
    .then((playlist) => {
      res.json(playlist)
    })
    .catch(next)
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