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

const EstablishmentSchema = new Schema({
    zomatoId: {type: Number,
    required: 'Establishment id is mandatory',
    unique: true
    },
    name: {type: String,
    required: 'Establishment name is mandatory'
    }
});

EstablishmentSchema.plugin(timestamps);
EstablishmentSchema.plugin(mongooseHidden,{ hidden: {createdAt: true,updatedAt :true,}});

const Establishment = mongoose.model('categories', EstablishmentSchema,'categories');
module.exports = Establishment;