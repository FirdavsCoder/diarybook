const db = require("../models/index")
const User = db.user


const getLoginPage = async (req, res) => {
    const isAuthenticated = req.get("Cookie").split("=")[1]
    res.render("auth/login", {title: "Login Page", isAuthenticated})
}




const loginUser = async (req, res) => {
    try {
        res.setHeader("Set-Cookie", "loggedIn=true")
        res.redirect("/diary/my")
    } catch (e) {
        console.log(e)
    }
}


module.exports = {
    getLoginPage,
    loginUser
}