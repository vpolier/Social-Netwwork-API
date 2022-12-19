const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')
// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_lenth: 1,
      max_lenth: 280,
      trim: true
    },
     username: {
      type: String,
      required: true,
    },
    reactions: [
     reactionSchema
    ],
    friend: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought'
      },
    ],
  },
  {
    timestamps:true,
    toJSON: {
      getters: true,
    },
  }
);

thoughtSchema.virtual('friendCount').get(function(){
  return this.friends.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
