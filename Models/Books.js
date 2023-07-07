const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const Book = new Schema({
    bookname: {
        type: String
    },
    price: {
        type:Number
    },
    review :{
        type:String
    }, 
    createdAt :{
        type:Date
    },
     author:{
        type: String
    }
    
   
})

const mainbooks = model('User_book',Book);

module.exports =mainbooks