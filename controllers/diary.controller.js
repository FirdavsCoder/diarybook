const getMyDiary= async (req, res) => {
    res.render("index")
}


const addNewDiary = async (req, res) => {
    res.render("")
}

module.exports = {
    getMyDiary
}