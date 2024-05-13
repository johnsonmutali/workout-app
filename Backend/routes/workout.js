const express = require("express")
const router = express.Router()
const Workout = require("../models/workout.js")
const {
  postGym,
  getHome,
  getCreate,
  getGym
} = require("../controllers/workoutController.js")

router.get("/", getHome)
router.post("/gym", postGym)
router.get("/create", getCreate)
router.get("/gym", getGym)

module.exports = router