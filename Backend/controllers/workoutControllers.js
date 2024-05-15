const mongoose = require("mongoose")
const WorkoutModel = require("../models/workoutModel.js")

const getWorkouts = async (req, res) => {
  try {
    //retrieve all workouts from the db
    const workouts = await WorkoutModel.find({}).sort({ createdAt: -1 })
    //set the status code to success and send the result
    res.status(200).json(workouts)
  } catch (err) {
    res.status(404).json({ err: err.message })
  }
}

const postWorkouts = async (req, res) => {
  try {
    //create a new workout instance using the request body received
    //from an  input field
    const workout = await WorkoutModel.create(req.body)
    res.status(200).json(workout)
  } catch (err) {
    res.status(400).json({ err: err.message })
  }
}

const getWorkoutById = async (req, res) => {
  //get the id
  const { id } = req.params

  //check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "Invalid id!" })
  }

  /*if the id is valid, retrieve an object with the same id as the one
  specified*/
  const workout = await WorkoutModel.findById(id)

  //check if there was an object with the id
  if (!workout) {
    res.status(404).json({ error: "No such workout!!" })
  }
  res.status(200).json(workout)
}

const deleteWorkout = async (req, res) => {
  //get the id
  const { id } = req.params

  //check if id is Valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "Invalid id" })
  }
  //delete workout if id is valid
  const workout = await WorkoutModel.findOneAndDelete({
    //specify the criteria for searching the object to be deleted.
    _id: id
  })

  //check if there was an object with the id 
  if (!workout) {
    res.status(400).json({ error: "No such Workout" })
  }
  //return the deleted object if it existed
  res.status(200).json(workout)
}
const updateWorkout = async (req, res) => {
  //get the id
  const { id } = req.params

  //check if the id is Valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "invalid id" })
  }

  //update the object with the id
  const workout = await WorkoutModel.findOneAndUpdate({ _id: id }, {
    ...req.body
  })

  //check if there was an object with the id
  if (!workout) {
    res.status(400).json({ error: "No such workout" })
  }

  res.status(200).json(workout)
}

module.exports = {
  getWorkouts,
  postWorkouts,
  getWorkoutById,
  deleteWorkout,
  updateWorkout
}