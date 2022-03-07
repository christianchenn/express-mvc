class BaseController {
    message
    constructor() {

    }
    getErrorMessage(msg){
        return {
            message:msg
        }
    }

}

module.exports = BaseController