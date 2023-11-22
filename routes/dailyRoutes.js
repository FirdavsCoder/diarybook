const express = require("express")
const router = express.Router()
const {
    getMyDiary
} = require("../controllers/diary.controller")


router.get("/", getMyDiary)


module.exports = router