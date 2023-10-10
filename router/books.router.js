const express = require('express')
const router = express.Router()

const {getBooksObjects, getBooksData } = require('../middleware/books.middleware')
const {userNotFoundServerError500} = require('../middleware/errorHandling.middleware')

const {
    getAllBooks,
    postNewBook,
    updateBook,
    deleteBook
} = require('../controller/books.controller')


router.route('/')
    .get(getBooksObjects, getAllBooks )
    .post(getBooksObjects, postNewBook )
    
router.route('/:id')    
    .put(getBooksData, updateBook, userNotFoundServerError500 )
    .delete(getBooksData ,deleteBook, userNotFoundServerError500)

module.exports = router