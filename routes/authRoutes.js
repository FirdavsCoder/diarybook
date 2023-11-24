const express = require("express")
const router = express.Router()
const {
    getLoginPage, loginUser
} = require("../controllers/auth.controller")

router.get("/login", getLoginPage)
router.post("/login", loginUser)


module.exports = router