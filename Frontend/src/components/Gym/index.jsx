import "./index.scss"
import {
  useState, useEffect
} from "react"

export default function Gym() {
  //states
  const [workouts, setWorkouts] = useState(null)
  //fetch the data.
  //we use useEffect for this
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/")
        if (res.ok) {
          const data = await res.json()
          setWorkouts(data)
        }
      } catch (err) {
        console.log("error: ", err)
      }
    }

    fetchData()
  }, [])

  console.log("workouts: ", workouts)
  return (
    <div id="gym">
      <ul class="workout-list">
        <h1>workout list</h1>
        {
          workouts && workouts.map(workout => (
            <li class="workout" key={workout._id}>
              <h3 class="workout-title">{workout.title}</h3>
              <p>preps: {workout.preps}</p>
              <p>load: {workout.load}</p>
            </li>
          ))
        }
      </ul>
    </div >
  )
}