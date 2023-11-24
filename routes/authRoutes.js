const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const {
    getLoginPage, loginUser, logout, getRegisterPage, registerUser
} = require("../controllers/auth.controller")

router.get("/login", getLoginPage)
router.post("/login", loginUser)
router.get("/logout", logout)
router.get("/register", getRegisterPage)
router.post("/registration", registerUser)


module.exports = router