const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');
const mongooseHidden = require('mongoose-hidden');

const establishmentSchema = new Schema({
    zomatoId: {
        type: Number,
        required: 'Establishment id is mandatory',
        unique: true
    },
    name: {
        type: String,
        required: 'Establishment name is mandatory'
    }
});

establishmentSchema.plugin(timestamps);
establishmentSchema.plugin(mongooseHidden,{ hidden: {createdAt: true,updatedAt :true,}});

const Establishment = mongoose.model('establishments', establishmentSchema,'establishments');
module.exports = Establishment;