const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const workoutRoutes = require("./routes/workout.js")
const Workouts = require("./models/workout.js")

const app = express()
const dbURI = process.env.DB_URI


//middleware
app.use(express.json())
app.use(workoutRoutes)

const dummyData = [
  {
    title: "situps",
    preps: 50,
    load: 0

  },
  {
    title: "pushups",
    preps: 50,
    load: 0
  },
  {
    title: "squirts",
    preps: 50,
    load: 0
  },
  {
    title: "pullups",
    preps: 50,
    load: 0
  }
]

mongoose.connect(dbURI)
  .then(res => {
    app.listen(process.env.PORT)
    console.log("listening on port ", 3000)

    Workouts.insertMany(dummyData)
    console.log("Added data")
  })
  .catch(err => console.log(err))

app.set("view engine", "ejs")

