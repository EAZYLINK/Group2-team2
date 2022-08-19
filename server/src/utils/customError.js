class CustomAPIError {
    constructor(msg, status=500){
        super(msg);
        this.status = status;
    }

    static notFound(msg) {
        return new this(msg || "Route not found", 404);
    }

    static badRequest(msg = "Invalid Request", status=400){
        return new this(msg, status);
    }

    static unauthorized(msg, status=401){
        const message = msg || "You don't the right access to view this route";
        return new this(message, status);
    }

    static unauthenticated(msg, status=401){
        const message = msg || "You need to login first before accessing this route";
        return new this(message, status);
    }

    static CustomAPIError(msg = "Unknown Error", status=500){
        return new this(msg, status);
    }
}


module.exports = {
    CustomAPIError,
}