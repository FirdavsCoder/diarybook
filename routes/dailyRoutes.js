const express = require("express")
const router = express.Router()
const {
    getMyDiary,
    addNewDiary
} = require("../controllers/diary.controller")


router.get("/", getMyDiary)
router.post("/add", addNewDiary)


module.exports = router