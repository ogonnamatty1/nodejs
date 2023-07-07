const express = require('express');
const router = express.Router();
const ContactController = require('../../Controllers/ContactController')


router.post('/', ContactController.createContact );
router.get('/', ContactController.getContact);
router.get('/phone/:phone', ContactController.getPhone);
router.get('/name/:name', ContactController.getName);
router.get('/delete/:delete', ContactController.getNameDelete);
router.patch('/name/:name', ContactController.editName);
router.patch('/update/:id', ContactController.updateContact)


module.exports = router;
