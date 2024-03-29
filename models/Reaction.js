const { Schema, Types } = require('mongoose');
//const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(
    {
       reationId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
       }, 
       reationBody: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
       }, 
       username: {
        type: String,
        required: true,
       },
       createdAt: {
        type: Date,
        default: Date.now,
      //  get: (timestamp) => dateFormat(timestamp),
       }
    },
    {
        toJSON: {

            getters: true
        },
        id: false
       }
);

module.exports = reactionSchema;