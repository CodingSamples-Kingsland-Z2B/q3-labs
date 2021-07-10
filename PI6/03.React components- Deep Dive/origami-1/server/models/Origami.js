const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const origamiSchema = new Schema({

    description: {
        type: String,
        required: true,
    },

    author: {
        type: ObjectId,
        ref: "User"
    }

});

module.exports = new Model('Origami', origamiSchema);