const notFoundError = (res, error) => {
    res.status(404)
    res.send({
        error: 404,
        msg: error
    })
}

module.exports = {notFoundError}