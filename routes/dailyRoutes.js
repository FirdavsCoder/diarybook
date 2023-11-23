const express = require("express")
const router = express.Router()
const {
    getMyDiary,
    addNewDiary,
    getDiaryById
} = require("../controllers/diary.controller")

router.get("/diary/my", getMyDiary)
router.get("/diary/:id", getDiaryById)
router.post("/diary/add", addNewDiary)


module.exports = router