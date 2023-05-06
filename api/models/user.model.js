const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String,
      required: "User email is required",
      match: [/^\S+@\S+\.\S+$/, "User email must be valid"],
      unique: true
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
    artists: {
      type: [String]
    },
    score: {
      type: [Number]
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

  if (user.isModified('password')) {
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

userSchema.virtual('playlists', {
  ref: 'Playlist',
  localField: '_id',
  foreignField: 'owner',
  justOne: false
})

userSchema.virtual('likes', {
  ref: 'Like',
  localField: '_id',
  foreignField: 'user',
  justOne: false,
});

const User = mongoose.model("User", userSchema);
module.exports = User;