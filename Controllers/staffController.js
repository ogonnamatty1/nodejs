const mongoose = require('mongoose');
const staff = require('../Models/staff')
 const HttpError = require('../middleware/error')
 const bcrypt = require('bcrypt');

 const createstaff = async(req,res)=>{
    try{

    
    const{staffAddress, staffEmail, staffName, staffPhone, staffPassword} = req.body
    const findEmail = await staff.findOne({staffEmail:staffEmail});
    const findPhone = await staff.findOne({staffPhone:staffPhone});


    if(findEmail){
        res.status(400).json({message:'email already exist'})
    }
    else if (findPhone){
        res.status(400).json({message:'phone number already exist'})
    }
   
    else { 
        bcrypt.hash(staffPassword, 10, async (err, hashed) => {
            if (err) {
             
              console.error(err);
              return res.status(400).json({error: err, message:'Password could not be hashed'})
            } else {
              console.log(hashed);
              const newStaff = await staff.create({
                 staffAddress: staffAddress,
                 staffEmail : staffEmail,
                 staffName : staffName,
                 staffPhone : staffPhone,
                 staffPassword : hashed
              }) 

             return res.status(201).json({data:newStaff})
            }
        })
   
}
    }
    catch(err){ const error = `network issue please contact your service provider: ${err.message}`
    res.status(500).json({err:error})

    }
 }





 module.exports = {createstaff}