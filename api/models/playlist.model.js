const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playlistSchema = new Schema(
  {
    name: {
      type: String
    },
    playlistId: {
      type: String,
      unique: true
    },
    tracks: {
      type: [String]
    },
    owner: {
      type: String,
      required: 'Must log in before creating playlist.'
    },
    image: {
      type: String
    }
  }, 
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function(doc, ret) {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      }
    }
  });

  playlistSchema.virtual('likes', {
    ref: 'Like',
    localField: 'playlistId',
    foreignField: 'playlist',
    justOne: fal
  })

  const Playlist = mongoose.model('Playlist', playlistSchema);
  module.exports = Playlist;