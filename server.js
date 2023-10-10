// Your Code goes here
const express = require('express')
const app = express()
const port = process.env.port || 3000
const router = require('./router/books.router')
const {
    clientError404,
    errorHandler
} = require('./middleware/errorHandling.middleware')

app.use(express.json())


app.use('/books', router)
app.use(clientError404)
app.use(errorHandler)

app.listen(port, () =>{
    console.log(`Listening on http://localhost:${port}`)
})

// Codebuddy-Stuff :)
module.exports = app;
