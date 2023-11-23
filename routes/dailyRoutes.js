const express = require("express")
const router = express.Router()
const {
    getMyDiary,
    addNewDiary,
    getDiaryById,
    updateDiaryGetPage,
    updateDiary,
    deleteDiary,
    addCommentToDiary
} = require("../controllers/diary.controller")

router.get("/my", getMyDiary)
router.get("/update/:id", updateDiaryGetPage)
router.post("/add", addNewDiary)
router.post("/update/:id", updateDiary)
router.post("/delete/:id", deleteDiary)
router.post("/comment/:id", addCommentToDiary)
router.post("/comment/")



router.get("/get/:id", getDiaryById)

module.exports = router