const mongoose = require('mongoose');
const joi = require('joi')
 const {Schema, model }  = mongoose
  const staff = new Schema({
  staffName:{
    type:String,
    required:true,
   
  },

  staffEmail:{
     type:String,
     required:true, 
     unique:true

    },
  staffPhone:{
     type:Number,
     required:true,
     unique:true
    },
  staffAddress:{ 
    type:String,
    required:true
},
  staffPassword:{
     type:String,
     required:true,
     unique:true,
     validate: {
      validator:(value)=> {
        return value.length >= 8;
      },
      message: 'password must be at least 8 characters long'
    }
    },
  createdAt: {
    type:Date
  }
   
  
  })
   const staffprofile = model('staff', staff);
    module.exports= staffprofile;