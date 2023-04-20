const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String
    },
    userId: {
      type: String,
      required: 'Account is not valid',
      unique: true
    },
    token: {
      type: String
    },
    globalScore: {
      type: Number
    },
    score: {
      type: [Number]
    },
    playlists: {
      type: [mongoose.Schema.Types.ObjectId], 
      ref: 'Playlist'
    },
    image: {
      type: String
    }


  }, {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret
      },
    },
  }
);

userSchema.virtual('likes', {
  ref: 'Like',
  localField: 'userId',
  foreignField: 'user',
  justOne: false,
});

userSchema.virtual('scoreboard', {
  ref: 'Scoreboard',
  localField: 'score',
  foreignField: 'user',
  justOne: false
});

const User = mongoose.model("User", userSchema);
module.exports = User;