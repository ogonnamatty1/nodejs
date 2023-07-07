const express = require('express');
const createBooks = require('../../Controllers/BookController');
const router = express.Router();

router.post('/', createBooks.createBooks);
router.get('/', createBooks.findBooks)
router.get('/name:name', createBooks.getOneBook)






module.exports = router;