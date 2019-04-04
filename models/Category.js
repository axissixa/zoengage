// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const EstablishmentSchema = new Schema({
//     Name: { type: String },
//     id: { type: Integer, required: true }
// });

// schema.set('toJSON', { virtuals: true });

// module.exports = mongoose.model('Restaurants', schema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');
const mongooseHidden = require('mongoose-hidden');

const categorySchema = new Schema({
    zomatoId: {
        type: Number,
        required: 'category id is mandatory',
        unique: true
    },
    name: {
        type: String,
        required: 'category name is mandatory'
    }
});

categorySchema.plugin(timestamps);
categorySchema.plugin(mongooseHidden,{ hidden: {createdAt: true,updatedAt :true,}});

const Category = mongoose.model('categories', categorySchema,'categories');
module.exports = Category;