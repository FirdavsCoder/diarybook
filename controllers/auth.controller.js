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
        req.session.user = {
            id: 1,
            email: 'user@mail.com',
            name: 'user',
            password: '1234567'
        }
        console.log(req.session)
        req.session.save(err => {
                if(err) throw err;
                res.redirect("/diary/my")
            }
        )
    } catch (e) {
        console.log(e)
    }
}


const logout = async (req, res) => {
    req.session.destroy(() => {
        res.redirect("/auth/login")
    })
}


const getRegisterPage = async (req, res) => {
    res.render("auth/register", {title: "Registration page"})
}


const registerUser = async  (req, res) => {
    try{
        const  { email, name, password, password2 } = req.body
        console.log(email, name, password)
        if (password !== password2) {
            return res.redirect("/auth/register")
        }
        const userEmailExist = await User.findOne({email: email})
        console.log(userEmailExist)
        if (userEmailExist) {
            return res.redirect("/auth/register")
        }
        await User.create(
            req.body.email,
            req.body.name,
            req.body.password
        )
        return res.redirect("/diary/my")
    } catch (e) {
        console.log(e)
    }
}


module.exports = {
    getLoginPage,
    loginUser,
    logout,
    getRegisterPage,
    registerUser
}