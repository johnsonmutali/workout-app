import {
  useState, useEffect
} from "react"

//pages
import "./index.scss"
import Form from "../Form"

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
      <ul className="workout-list">
        <h1>workout list</h1>
        {
          workouts && workouts.map(workout => (
            <li className="workout" key={workout._id}>
              <h3 className="workout-title">{workout.title}</h3>
              <p>preps: {workout.preps}</p>
              <p>load: {workout.load}</p>
            </li>
          ))
        }
      </ul>
      <Form />
    </div>
  )
}