const { check } = require("express-validator")
const { validateResult } = require("../helpers/validateHelper")

const validateCreate = [
    check('title', "Ingrese un valor para título")
        .exists()
        .not()
        .isEmpty()
        .isString(),
    check('description')
        .default("")
        .isString(),
    (req, res, next) => {
        validateResult(req, res, next)
    }

]

module.exports = { validateCreate}