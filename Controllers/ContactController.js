const mongoose = require('mongoose');
const Contact = require('../Models/Contact')
 const HttpError = require('../middleware/error')

// create a post 
const createContact = async (req, res) => {
    const { name, phone, email, address } = req.body;
    try {
        const contact = await Contact.create({
            name,
            email,
            phone,
            address
        })
        res.status(201).json({
            data: contact
        })
    }
    catch(err){ const error = `data is empty: ${err.message}`
        res.status(404).json({err:error})

    }
}
// get all information
 const getContact = async (req, res)=> { 
    const contact=  await Contact.find();
     try{ 
        res.status(200).json({
            data:contact
        })

     }
     catch(err){
        res.status(404).json({
            err:err.message
        })

     }

 }
  const getName = async (req, res, next)=>{
    const name = await Contact.findOne({name:req.params.name})

    if(!name){ 
        return next(new HttpError("information not found!!"))
    }
    try{
        res.status(201).json({data:name })

  }
  
  catch(err){ const error = `data is empty: ${err.message}`
  res.status(404).json({err:error})

}

  }

  const getPhone = async (req, res)=>{
    const phone = await Contact.findOne({phone:req.params.phone});
    try{
        res.status(201).json({data:phone });
  }
  
  catch(err){ const error = `data is empty: ${err.message}`
  res.status(404).json({err:error})

}
}

const getNameDelete = async(req, res)=>{
    const deletename = await Contact.findOneAndDelete({name:req.params.delete})
    try{
res.status(201).json({data:deletename})
    } 
   
    catch(err){ const error = `data is empty: ${err.message}`
        res.status(404).json({err:error})

    }

}
 const editName = async (req,res)=>{ 
    const editAddress = {name:req.params.name};
const editted = await Contact.updateMany( editAddress, {$set:{ name:"richard"} } )




    try{
        res.status(201).json({data:editted})
    }

    catch(err){ const error = `data is empty: ${err.message}`
        res.status(404).json({err:error})

    }
 }


 const updateContact = async (req, res, next)=>{
    const name = await Contact.findByIdAndUpdate(
        req.params.id, req.body,{
            new:true,
            runValidators:true
        })

        if(!name) {
            return next(new HttpError('information not found'))
        }
         try{
            res.status(201).json({data:name})
         }
         catch(err){ const error = `data is empty: ${err.message}`
        res.status(404).json({err:error})

    }

 }


module.exports = {
    createContact,
    getContact,
    getName, 
    getPhone, 
    getNameDelete, 
    editName,
    updateContact
   
}