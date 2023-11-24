const express = require("express")
const dotenv = require("dotenv")
const exphbs = require("express-handlebars")
const session = require("express-session")
const path = require("path")
const dailyRoutes = require("./routes/dailyRoutes")
const db = require("./models/index")
const authRoutes = require("./routes/authRoutes")



// Initial env variables
dotenv.config()
const app = express()

// Initialize template engine
app.engine('.hbs', exphbs.engine({extname: '.hbs'}))
app.set("view engine", '.hbs')

// Body Parsers
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, "public")))




// Initialize Routes
app.use("/diary", dailyRoutes)
app.use("/auth", authRoutes)



app.use((req, res, next) => {
    res.render("diary/404")
})



const PORT = process.env.PORT || 3000


const start = async () => {
    try {
        const connect = await db.sequelize.sync()
        app.listen(PORT, () => {
            console.log(`Server running on port: http://localhost:${PORT}`);
        })
    } catch (err) {
        console.log(err);
    }
}


start()