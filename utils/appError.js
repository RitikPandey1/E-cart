
class AppError extends Error{

    constructor(status, message, statusCode) {
        super();
        this.status = status;
        this.message = message;
        this.statusCode = statusCode
    }
}

module.exports = AppError;
