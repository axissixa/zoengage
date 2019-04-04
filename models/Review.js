const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');
const mongooseHidden = require('mongoose-hidden');

const reviewSchema = new Schema({
    zomatoId: {
        type: Number,
        index : true,
        required: 'restaurant id is mandatory',
        unique: true
    },
    userId: {
        type: Number,
        required: 'logged in user is required',
    },
    userRating: {
        type: Number,
        enum: [1,2,3,4,5],
        required: 'rate the restraunt from 0-10'
    },
    content: {
        type: String,
        default: null
    }
});

reviewSchema.plugin(timestamps);
reviewSchema.plugin(mongooseHidden,{ hidden: {createdAt: true,updatedAt :true,}});

const Review = mongoose.model('reviews', reviewSchema,'reviews');
module.exports = Review;