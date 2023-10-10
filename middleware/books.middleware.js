const {getBooks} = require('../model/books.model')

function getBooksObjects(req,res,next){
    const books = getBooks();
    next( books )
}

function getBooksData(req,res,next){
    const books = getBooks();
    const bookId = parseInt(req.params.id)
    const book = books.find( book => book.id === bookId)
    next( {book, books} )
}

module.exports = { getBooksObjects, getBooksData }