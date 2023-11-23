const express = require("express")
const router = express.Router()
const {
    getLoginPage
} = require("../controllers/auth.controller")

router.get("/login", getLoginPage)


module.exports = router