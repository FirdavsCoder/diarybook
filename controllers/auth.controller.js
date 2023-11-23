const db = require("../models/index")
const User = db.user


const getLoginPage = async (req, res) => {
    res.render("auth/login", {title: "Login Page"})
}




const loginUser = async (req, res) => {
    res.render("auth/login", {title: "Login Page"})
}


module.exports = {
    getLoginPage
}