function userNotFoundServerError500( req,res,next ){
    const err = new Error("User not Found")
    err.status = "error"
    err.statusCode = 500
    return next(err)
}


function clientError404(req, res, next){
    const err = new Error("Page Not Found")
    err.status = "fail"
    err.statusCode = 404
    return next(err)
}


function errorHandler(error, req, res, next){
    const statusCode = error.statusCode
    const status = error.status || "error"
    res.status(statusCode).json({
        status: status,
        message: error.message,
    })
}


module.exports = {
    userNotFoundServerError500,
    clientError404,
    errorHandler
}