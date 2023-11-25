const db = require("../models/index")
const User = db.user
const Diary = db.diary



const getProfilePage = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {id: req.params.id },
            raw: true
        })
        const diaries = await Diary.findAll(
            {
                where: { userId: user.id },
                raw: true
            })
        console.log(diaries.length)
        try {
            return res.render("user/profile", {
                title: "Profile Page",
                user: user,
                diariesLength: diaries.length,
                isAuthenticated: req.session.isLogged
            })
        } catch (e) {
            console.log(e)
        }
    } catch (e) {
        return res.render("diary/404", {title: "Not Found Page", isAuthenticated: req.session.isLogged})
    }
}







const getMyProfilePage = async (req, res) => {
    const user = req.session.user
    const diaries = await Diary.findAll(
        {
            where: { userId: user.id },
            raw: true
        })
    console.log(diaries.length)
    try {
        res.render("user/myprofile", {
            title: "Profile Page",
            user: user,
            diariesLength: diaries.length,
            isAuthenticated: req.session.isLogged
        })
    } catch (e) {
        console.log(e)
    }
}






module.exports = {
    getProfilePage,
    getMyProfilePage
}