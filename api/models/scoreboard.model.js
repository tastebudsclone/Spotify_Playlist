const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreboardSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: 'User is required'
    },
    score: {
      type: [Number]
    }
  }, 
  { 
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    },
  }
);

const Scoreboard = mongoose.model('Scoreboard', scoreboardSchema);
module.exports = Scoreboard;