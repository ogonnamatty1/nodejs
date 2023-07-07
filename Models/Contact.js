const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Contact = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        // unique:true
    },
    phone: {
        type: Number,
        // unique:true
    },
    address: {
        type: String,
    },
    createAt: {
        type:Date 
    }
})
const mycontact = model('contacts', Contact)
module.exports = mycontact // making this function pubic in the app