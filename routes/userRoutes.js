const express = require("express")
const router = express.Router()
const {
   getProfilePage, getMyProfilePage
} = require("../controllers/user.controller")
const { loginRequired} = require("../middlewares/auth")

router.get("/profile/my", loginRequired, getMyProfilePage)
router.get("/profile/:id", loginRequired, getProfilePage)



module.exports = router