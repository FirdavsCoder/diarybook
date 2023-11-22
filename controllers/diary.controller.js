const getMyDiary= async (req, res) => {
    res.render("index")
}


const addNewDiary = async (req, res) => {
    try {
        const { imageUrl, text } = req.body
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getMyDiary
}