const express = require("express")
const router = express.Router()
const {
    getLoginPage, loginUser, logout, getRegisterPage
} = require("../controllers/auth.controller")

router.get("/login", getLoginPage)
router.post("/login", loginUser)
router.get("/logout", logout)
router.get("/register", getRegisterPage)


module.exports = router