class ApiError extends Error{
    constructor(
        statusCode,
        massage="Something want wrong",
        errors = [],
        statck = ""
    ){
        super(massage)
        this.statusCode = statusCode
        this.data = null
        this.massage = massage
        this.success = false
        this.errors = errors

        if(statck){
            this.statck =stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}