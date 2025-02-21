const { validationResult } = require("express-validator")

const validateResult = (req, res, next) => {
    try{
        validationResult(req).throw()
        return next()
    }catch(e){
        res.status(400)
        res.send({ 
            error: 400,
            msg: e.array() 
        })
    }
}

module.exports = { validateResult}