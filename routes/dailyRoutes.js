const express = require("express")
const router = express.Router()
const {
    getMyDiary,
    addNewDiary
} = require("../controllers/diary.controller")


router.get("/diary/my", getMyDiary)
router.post("/diary/add", addNewDiary)


module.exports = router