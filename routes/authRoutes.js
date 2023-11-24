const express = require("express")
const router = express.Router()
const {
    getLoginPage, loginUser, logout, getRegisterPage, registerUser
} = require("../controllers/auth.controller")
const { guest } = require("../middlewares/auth")


router.get("/login", guest, getLoginPage)
router.post("/login", guest, loginUser)
router.get("/logout", logout)
router.get("/register", guest, getRegisterPage)
router.post("/registration", guest, registerUser)


module.exports = router