const express = require("express")
const router = express.Router()
const {
    getMyDiary,
    addNewDiary,
    getDiaryById, updateDiaryGetPage, updateDiary, deleteDiary
} = require("../controllers/diary.controller")

router.get("/my", getMyDiary)
router.get("/update/:id", updateDiaryGetPage)
router.post("/add", addNewDiary)
router.post("/update/:id", updateDiary)
router.post("/delete/:id", deleteDiary)



router.get("/get/:id", getDiaryById)

module.exports = router