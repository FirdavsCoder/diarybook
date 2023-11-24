const loginRequired = (req, res, next) => {
    console.log(req.session)
    if(!req.session.isLogged) {
        res.redirect("/auth/login")
    }
    next()
}

module.exports = {
    loginRequired
}