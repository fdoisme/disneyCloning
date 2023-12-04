function errorHandler(error, req, res, next) {
    let statusRes = 500
    let message = "Internal Server Error"
    if (error.name == "nullEmail") {
        statusRes = 401
        message = "Please input Email"
        console.log(error);
    } else if (error.name == "nullPassword") {
        statusRes = 401
        message = "Please input Password"
        console.log(error);
    } else if (error.name == "failLogin") {
        statusRes = 401
        message = "Email or Password are invalid"
        console.log(error);
    } else if (error.name == "Forbidden") {
        statusRes = 403
        message = "Forbidden"
        console.log(error);
    } else if (error.name == "notFound") {
        statusRes = 404
        message = "Data Not Found"
        console.log(error);
    } else if (error.name == "unauthentication" || error.name == "JsonWebTokenError") {
        statusRes = 401
        message = "Unauthentication"
        console.log(error);
    } else if (error.name == "SequelizeUniqueConstraintError" || error.name == "SequelizeValidationError") {
        let errorValidate = error.errors.map((el) => {
            return el.message
        })
        statusRes = 400
        message = errorValidate[0]
        console.log(error);
    } else if (error.name == "SequelizeForeignKeyConstraintError") {
        statusRes = 401
        message = "Invalid Genre id"
    } else if (error.name == "nameCast"){
        statusRes = 400,
        message = error.message
    } else if (error.name == "invalidId"){
        statusRes = 400,
        message = error.message
    }
    console.log(error, "LOG DARI ERRORHANDLE");
    res.status(statusRes).json({ message })
}

module.exports = errorHandler