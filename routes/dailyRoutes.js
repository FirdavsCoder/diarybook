const express = require("express")
const router = express.Router()
const {
    getMyDiary,
    addNewDiary,
    getDiaryById, updateDiaryGetPage
} = require("../controllers/diary.controller")

router.get("/my", getMyDiary)
router.get("/:id", getDiaryById)
router.get("/update/:id", updateDiaryGetPage)
router.post("/add", addNewDiary)



module.exports = router