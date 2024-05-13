const Workout = require("../models/workout.js")



const postGym = async (req, res) => {
  const workout = new Workout(req.body)
  console.log(workout)
  workout.save()
    .then(result => res.redirect("/gym"))
    .catch(err => console.log(err))
}

const getHome = async (req, res) => {
  res.render("index")
}
const getCreate = async (req, res) => {
  res.render("create")
}
const getGym = async (req, res) => {
  Workout.find()
    .then(result => {
      res.render("gym", { workouts: result })
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = {
  postGym,
  getHome,
  getCreate,
  getGym
}