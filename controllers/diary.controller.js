const db = require("../models/index")
const Diary = db.diary

const getMyDiary= async (req, res) => {
    res.render("index")
}


const addNewDiary = async (req, res) => {
    try {
        const { imageUrl, text } = req.body
        await Diary.create({
            imageUrl: imageUrl,
            text: text
        })
        res.redirect("/")
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getMyDiary,
    addNewDiary
}