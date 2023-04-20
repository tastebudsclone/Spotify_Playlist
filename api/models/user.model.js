const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String
    },
    username: {
      type: String,
      required: 'Username is required',
      unique: true,
      minlength: [3, 'Username must be at least 3 chars']
    },
    password: {
      type: String,
      required: 'Password is required',
      minlength: [6,'Password must be at least 6 chars']
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
        delete ret.password;
        return ret
      },
    },
  }
);

userSchema.pre('save', function (next) {
  const user = this;

  if (user.isModified('passwords')) {
    bcrypt
      .genSalt(10)
      .then((salt) => {
        return bcrypt.hash(user.password, salt).then((hash) => {
          user.password = hash;
          next();
        })
      })
      .catch((error) => next(error));
  } else {
    next();
  }
});

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compare(password, this.password);
}

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