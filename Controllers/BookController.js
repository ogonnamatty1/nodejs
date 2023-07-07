const express = require("express");
const mongoose = require("mongoose")
const books = require("../Models/Books")


 const createBooks = async (req, res)=>{
   const {bookname, price, review, author} = req.body; 
    try {
         const BOOKS  = await books.create({
         bookname, 
         price,
         review, 
         author

         })
        res.status(201).json({data:BOOKS})

    }


    catch(err){
        res.status(404).json({err:err.message

        })

    }

 }


 const findBooks =  async (req, res)=>{
    const searchBook = await books.find()

    try{
        res.status(201).json({data:searchBook, })

    }
    catch(err){
        res.status(404).json({
            err:err.message
        })

    }
 }

 
 const getOneBook = async (req, res)=>{
    const name = await Contact.findOne({name:req.params.name})
    try{
        res.status(201).json({data:name })

  }
  
  catch(err){ const error = `data is empty: ${err.message}`
  res.status(404).json({err:error})

}

  }

 module.exports = {createBooks, findBooks, getOneBook}