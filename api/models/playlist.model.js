const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//TO DO ARTIST ATTRIBUTE AND POPULATE IN USER

const playlistSchema = new Schema(
  {
    name: {
      type: String
    },
    tracks: {
      type: [String]
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
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
    localField: '_id',
    foreignField: 'playlist',
    justOne: false
  })

  const Playlist = mongoose.model('Playlist', playlistSchema);
  module.exports = Playlist;