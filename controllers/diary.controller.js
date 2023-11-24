const db = require("../models/index")
const Diary = db.diary
const Comment = db.comment

const getMyDiary= async (req, res) => {
    const diaries = await Diary.findAll({raw: true})
    res.render("diary/my-diary", {
        title: "My diary",
        diaries: diaries.reverse(),
        isAuthenticated: req.session.isLogged
    })
}



const addNewDiary = async (req, res) => {
    try {
        const { imageUrl, text } = req.body
        await Diary.create({
            imageUrl: imageUrl,
            text: text
        })
        res.redirect("/diary/my")
    } catch (error) {
        console.log(error);
    }
}


const getDiaryById= async (req, res) => {
    const data = await Diary.findByPk(Number(req.params.id), {
        raw: false,
        plain: true,
        include: ['comment'],
        nest: true
    })
    const diary = await data.toJSON()
    console.log(diary)
    // console.log(diaries[0].dataValues)
    res.render("diary/one-diary", {
        title: "One diary",
        diary,
        comments: diary.comment.reverse(),
        isAuthenticated: req.session.isLogged
    })
}


const updateDiaryGetPage= async (req, res) => {
    const diary = await Diary.findByPk(req.params.id, {raw: true})
    res.render("diary/update-diary", {
        title: "Update diary",
        diary
    })
}

const updateDiary = async (req, res) => {
    try {
        await Diary.update(
            {text: req.body.text},
            {where: {id: req.params.id}}
        )
        res.redirect("/diary/my")
    } catch (error) {
        console.log(error)
    }
}



const deleteDiary = async (req, res) => {
    try {
        await Diary.destroy(
            {where: {id: req.params.id}}
        )
        res.redirect("/diary/my")
    } catch (error) {
        console.log(error)
    }
}

const addCommentToDiary = async (req, res) => {
    try {
        await Comment.create({
            name: "Username",
            comment: req.body.comment,
            diaryId: req.params.id
        })
        res.redirect("/diary/get/" + req.params.id)
    } catch (e) {
        console.log(e)
    }
}


module.exports = {
    getMyDiary,
    addNewDiary,
    getDiaryById,
    updateDiaryGetPage,
    updateDiary,
    deleteDiary,
    addCommentToDiary
}