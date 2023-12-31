const db = require("../models/index")
const User = db.user
const bcrypt = require("bcryptjs")

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
        const userExist = await User.findOne({where: {email: req.body.email}})
        if (userExist) {
            const matchPassword = await bcrypt.compare(req.body.password, userExist.password)
            if (matchPassword) {
                req.session.isLogged = true
                req.session.user = userExist
                req.session.save(err => {
                    if (err) throw err;
                    return res.redirect("/diary/my")
                })
            } else {
                return res.redirect("/auth/login")
            }
        } else {
            return res.redirect("/auth/login")
        }
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
        const userEmailExist = await User.findOne({ where: {email} })
        console.log(userEmailExist)
        if (userEmailExist) {
            return res.redirect("/auth/register")
        }
        const salt = await bcrypt.genSalt(12)
        const hashedPassword = await bcrypt.hash(password, salt)
        console.log(hashedPassword)
        await User.create(
            {
                email,
                name,
                password: hashedPassword
            }
        )
        return res.redirect("/auth/login")
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