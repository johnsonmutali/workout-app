const Workout = require("../models/workout.js")

const postWorkout = async (req, res) => {
  const { title, reps, load } = req.body

  try {
    const workout = await Workout.create(req.body)
    res.status(200).json(workout)
  } catch (err) {
    res.status(400).json({ err: err.message })
  }
}

const createWorkout = async (req, res) => {
  const workout = new Workout(req.body)

  workout.save()
    .then(result => res.redirect("/"))
    .catch(err => console.log(err))
}

const getHome = async (req, res) => {
  res.render("index")
}
const getCreate = async (req, res) => {
  res.render("create")
}

module.exports = {
  postWorkout,
  createWorkout,
  getHome,
  getCreate
}