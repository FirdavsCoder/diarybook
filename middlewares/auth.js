const loginRequired = (req, res, next) => {
    if(!req.session.isLogged) {
        res.redirect("/auth/login")
    }
    next()
}

const guest = (req, res, next) => {
    if(req.session.isLogged) {
        res.redirect("/diary/my")
    }
    next()
}

module.exports = {
    loginRequired,
    guest
}