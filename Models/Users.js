const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const Users = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number,
    },
    address: {
        type: String
    },
    bookid: {
        type:Number
    }
})

const mainusers = model('Users', Users);
module.exports =mainusers