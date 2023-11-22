const express = require("express")
const dotenv = require("dotenv")
const exphbs = require("express-handlebars")


// Initial env variables
dotenv.config()
const app = express()

// Initialize template engine
app.engine('.hbs', exphbs.engine({extname: '.hbs'}))
app.set("view engine", '.hbs')



const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
})