const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');
const mongooseHidden = require('mongoose-hidden');

const cuisineSchema = new Schema({
    zomatoId: {
        type: Number,
        required: 'cuisine id is mandatory',
        unique: true
    },
    name: {
        type: String,
        required: 'cuisine name is mandatory'
    }
});

cuisineSchema.plugin(timestamps);
cuisineSchema.plugin(mongooseHidden,{ hidden: {createdAt: true,updatedAt :true,}});

const Cuisine = mongoose.model('cuisines', cuisineSchema,'cuisines');
module.exports = Cuisine;