const express = require("express")
const router = express.Router()
const Workout = require("../models/workout.js")
const {
  postWorkout,
  createWorkout,
  getHome,
  getCreate
} = require("../controllers/workoutController.js")

router.get("/", getHome)
router.post("/", postWorkout)
router.post("/", createWorkout)
router.get("/create", getCreate)

module.exports = router