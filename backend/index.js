const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const cookieParser = require("cookie-parser")//npm i cookie-parser
const authRoutes = require("./routes/auth.js")
const dashboardRoutes = require("./routes/dashboard.js")
require("dotenv").config()

app.use(cors({
    origin: "http://localhost:5173",
    credentials:true
}))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("DB connected successfully"))
    .catch(err => console.log(err))
app.get("/", (req, res) => res.json({ "message": "send successfully" }))
app.use("/api", authRoutes)
app.use("/api", dashboardRoutes)
app.listen(process.env.PORT, () => console.log("Server started successfully"))
