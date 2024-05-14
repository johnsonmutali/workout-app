const WorkoutModel = require("../models/workoutModel.js")

const getWorkouts = async (req, res) => {
  res.json({
    "mssg": "fetching workouts"
  })
}

const postWorkouts = async (req, res) => {
  try {
    const workout = await WorkoutModel.create(req.body)
    res.status(200).json(workout)
  } catch (err) {
    res.status(400).json({ err: err.message })
  }
}

const getWorkoutById = async (req, res) => {
  res.json({
    "mssg": "fetching a particular workout"
  })
}

const deleteWorkout = async (req, res) => {
  res.json({
    "mssg": "delete a single workout"
  })
}
const updateWorkout = async (req, res) => {
  res.json({
    "mssg": "update a single workout"
  })
}

module.exports = {
  getWorkouts,
  postWorkouts,
  getWorkoutById,
  deleteWorkout,
  updateWorkout
}