const express = require("express")
const router = express.Router()
const {
    getLoginPage, loginUser, logout, getRegisterPage, registerUser
} = require("../controllers/auth.controller")
const { guest, loginRequired} = require("../middlewares/auth")


router.get("/login", guest, getLoginPage)
router.post("/login", guest, loginUser)
router.get("/logout", loginRequired,logout)
router.get("/register", guest, getRegisterPage)
router.post("/registration", guest, registerUser)


module.exports = router