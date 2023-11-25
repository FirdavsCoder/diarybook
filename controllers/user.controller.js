const db = require("../models/index")
const User = db.user



const getProfilePage = async (req, res) => {
    const user = await User.findOne({ where: {id: req.params.id }})
    try {
        res.render("user/profile", {
            title: "Profile Page",
            isAuthenticated: req.session.isLogged
        })
    } catch (e) {
        console.log(e)
    }
}


module.exports = {
    getProfilePage
}