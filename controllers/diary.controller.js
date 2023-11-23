const db = require("../models/index")
const Diary = db.diary

const getMyDiary= async (req, res) => {
    const diaries = await Diary.findAll({raw: true})
    console.log(diaries[0].dataValues)
    res.render("diary/my-diary", {
        title: "My diary",
        diaries: diaries
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
    const diary = await Diary.findByPk(Number(req.params.id), {
        raw: true
    })
    // console.log(diaries[0].dataValues)
    res.render("diary/one-diary", {
        title: "One diary",
        diary
    })
}


const updateDiary= async (req, res) => {
    const diary = await Diary.findByPk(req.params.id, {raw: true})
    res.render("diary/my-diary", {
        title: "Update diary",
        diary
    })
}



module.exports = {
    getMyDiary,
    addNewDiary,
    getDiaryById
}