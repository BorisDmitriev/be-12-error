function getAllBooks(books, req, res, next){
    res.json(books)
}

function postNewBook(books, req, res, next){
    const newBook = req.body
    books.push(newBook)
    res.json( books )
}

function updateBook(booksData, req, res, next){
    const {book} = booksData

    if(!book){
        return next()
    }

    for(const key in book){
        book[key] = req.body[key]
    }

    res.json(book)
}

function deleteBook(booksData, req, res, next){

    const {book, books} = booksData

    const bookIndex = books.findIndex( bookItem => bookItem === book )

    if(bookIndex === -1){
        return next()
    }

    books.splice(bookIndex, 1)

    res.json(books)
}

module.exports = {
    getAllBooks,
    postNewBook,
    updateBook,
    deleteBook
}