const express = require("express")
const router = express.Router()
const {
    getLoginPage, loginUser, logout
} = require("../controllers/auth.controller")

router.get("/login", getLoginPage)
router.post("/login", loginUser)
router.get("/logout", logout)


module.exports = router