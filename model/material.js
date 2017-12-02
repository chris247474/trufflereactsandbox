'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an object that shows
//the shape of your database entries.
var MaterialSchema = new Schema({
    //mongoose unique index auto generated - needs verification
    ownerid: Number,
    ownername: String,
    materialType: String,
    quantity: Number,
    size: String
});

//export our module to use in server.js
module.exports = mongoose.model('Material', MaterialSchema);