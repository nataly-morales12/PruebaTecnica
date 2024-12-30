const httpError = (res, error) => {
    res.status(500)
    res.send({
        error: 500,
        msg: "Some server error"
    })
}

module.exports = {httpError}