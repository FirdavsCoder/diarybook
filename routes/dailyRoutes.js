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
const {
    loginRequired
} = require("../middlewares/auth")

router.get("/my", loginRequired, getMyDiary)
router.get("/update/:id", loginRequired, updateDiaryGetPage)
router.post("/add", loginRequired, addNewDiary)
router.post("/update/:id", loginRequired, updateDiary)
router.post("/delete/:id", loginRequired, deleteDiary)
router.post("/comment/:id", loginRequired, addCommentToDiary)
// router.post("/comment/")



router.get("/get/:id", getDiaryById)

module.exports = router