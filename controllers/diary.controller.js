const db = require("../models/index")
const Diary = db.diary
const Comment = db.comment

const getMyDiary= async (req, res) => {
    const data = await Diary.findAll({
        raw: true,
        plain: false,
        include: ['user'],
        nest: true
    })
    console.log(data)
    // const diaries = await data.toJSON()
    // console.log(diaries)
    res.render("diary/my-diary", {
        title: "My diary",
        diaries: data.reverse(),
        isAuthenticated: req.session.isLogged
    })
}



const addNewDiary = async (req, res) => {
    try {
        const { imageUrl, text } = req.body
        await Diary.create({
            imageUrl: imageUrl,
            text: text,
            userId: req.session.user.id
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
        include: ['comment', 'user'],
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
        diary,
        isAuthenticated: req.session.isLogged
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
    console.log(req.session)
    try {
        await Comment.create({
            name: req.session.user.name,
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