const db = require("../models/index")
const User = db.user


const getLoginPage = async (req, res) => {
    try {
        const isAuthenticated = req.session.isLogged
        res.render("auth/login", {title: "Login Page", isAuthenticated})
    } catch (e) {
        console.log(e)
    }
}




const loginUser = async (req, res) => {
    try {
        req.session.isLogged = true
        res.redirect("/diary/my")
    } catch (e) {
        console.log(e)
    }
}


module.exports = {
    getLoginPage,
    loginUser
}