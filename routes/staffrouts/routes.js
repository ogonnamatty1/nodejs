const express = require('express');
const router = express.Router();
const staffController = require('../../Controllers/staffController')


router.post('/', staffController.createstaff);





module.exports = router

