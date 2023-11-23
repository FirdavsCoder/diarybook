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

module.exports = {
    getMyDiary,
    addNewDiary
}