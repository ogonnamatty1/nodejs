const express = require('express')
const app = express()

const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const dotenvb = require('dotenv').config()

// prepare for incoming data from the client eg ,..browser , api testers
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// connect to db below 
mongoose.connect(process.env.MYDATABASE_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('database connected...')).catch((err) => {
    console.log(err)})

const bookRoutes = require('./routes/bookRoutes/route')
const contactRoutes = require('./routes/contactRoutes/route')
const staffRoutes = require('./routes/staffrouts/routes')




/// routes for the application 
app.use('/api/contacts', contactRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/staffs', staffRoutes)

console.log('working');


// route not found global error
app.use((req, res) => {
    const error = new Error('URL not found');
    error.status = 404;
    res.status(error.status).json({
        error: error.message,
    });
});



//  globaal error also create class 
  

app.use((error, req, res, next)=>{
    if(res.headerSent){
        return next(error)
    }
    res.status(error.code || 500)
    res.json({message:error.message || "an unknown error occured!"})
})






/// routes.......
// app.post('/api/contacts', async (req, res) => {
//     // create some contacts infomations in our models 
//     try {
//         const { name, address, phoneNumber, email } = req.body;
//         const response = await Contact.create({
//             name,
//             address, 
//             phoneNumber,
//             email
//         })
//         res.status(201).json({data:response, statusMesage:'data created successfully'})
//     } catch (err) {
//         // this line will catch the error if one occured
//         res.status(404).json({statusMesage:err.message})
//     }


// })

// const names = [{ name: 'scsfa' }, { name: 'sdsf' }]

// app.get('/api/contacts', async (req, res) => {
//     // get all the contact infomations
//     res.status(200).json({ data: names })
//     // Contact.find()

// })

// app.get('/api/contacts', async (req, res) => {
//     // get all the contact infomations
//     res.status(200).json({ data: names })
//     // Contact.find()

// })

// app.get('/api/contacts', async (req, res) => {
//     // get all the contact infomations
//     res.status(200).json({ data: names })
//     // Contact.find()

// })

// app.get('/api/contacts', async (req, res) => {
//     // get all the contact infomations
//     res.status(200).json({ data: names })
//     // Contact.find()

// })

// app.get('/api/contact/:name', async (req, res) => {
//     //get one user in the contact collection
// })


app.listen(process.env.PORT, () => {
    console.log('server is running ');
})