const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()
const dbURI = process.env.DB_URI


mongoose.connect(dbURI)
  .then(res => {
    app.listen(process.env.PORT)
    console.log("listening on port ", 3000)
  })
  .catch(err => console.log(err))


app.set("view engines", "ejs")