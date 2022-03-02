const express = require('express');

const router = express.Router();


const authorController = require('../controllers/authorController')



router.post('/createNewAuthor', authorController.createNewAuthor)
router.post('/createNewBook', authorController.createNewBook)
router.get('/allBooks', authorController.allBooks)
router.get('/updatedBookPrice', authorController.upadatedBookPrice)
router.get('/authorsName', authorController.authorsName)

module.exports = router;