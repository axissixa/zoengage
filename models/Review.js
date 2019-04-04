const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');
const mongooseHidden = require('mongoose-hidden');

const reviewSchema = new Schema({
    zomatoId: {
        type: Number,
        required: 'restaurant id is mandatory',
        unique: true
    },
    uder_id: {
        type: Number,
        required: 'logged in user is required',
    },
    user_rating: {
        type: Number,
        required: 'rate the restraunt from 0-10'
    },
    content: {
        type: String,
    }
});

reviewSchema.plugin(timestamps);
reviewSchema.plugin(mongooseHidden,{ hidden: {createdAt: true,updatedAt :true,}});

const Review = mongoose.model('reviews', reviewSchema,'reviews');
module.exports = Review;