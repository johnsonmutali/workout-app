const express = require("express")


const {
  getWorkouts,
  postWorkouts,
  getWorkoutById,
  deleteWorkout,
  updateWorkout
} = require("../controllers/workoutControllers")


const router = express.Router()

router.get("/", getWorkouts)
router.post("/", postWorkouts)
router.get("/:id", getWorkoutById)
router.delete("/:id", deleteWorkout)
router.patch("/:id", updateWorkout)

module.exports = router