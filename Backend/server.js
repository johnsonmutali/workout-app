const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const workoutRoutes = require("./routes/workoutRoutes")

const app = express()
const dbURI = process.env.DB_URI

//middleware
//allow requests from all origins
app.use(cors({
  origin: 'http://localhost:5173'
}));
//for post requests
app.use(express.json())
//use the workoutRoutes 
app.use(workoutRoutes)

mongoose.connect(dbURI)
  .then(res => {
    app.listen(process.env.PORT)
    console.log("listening on port ", 3000)
  })
  .catch(err => console.log(err))

