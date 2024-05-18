import {
  useEffect
} from "react"
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext.jsx"

//pages
import "./index.scss"
import Form from "../Form"

export default function Gym() {
  //states
  const { workouts, dispatch } = useWorkoutsContext()
  //fetch the data.
  //we use useEffect for this
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/")
        if (res.ok) {
          const data = await res.json()
          dispatch({ type: "SET_WORKOUT", payload: data })
        }
      } catch (err) {
        console.log("error: ", err)
      }
    }

    fetchData()
  }, [])

  const handleDelete = async (workout) => {
    try {
      const res = await fetch(`http://localhost:3000/${workout}`, {
        method: "DELETE"
      })
      if (res.ok) {
        const data = await res.json()
        dispatch({ type: "DELETE_WORKOUT", payload: data })
      }
    } catch (err) {
      console.log("deletion error: ", err)
    }

  }

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
              <span
                className="delete-btn"
                onClick={() => handleDelete(workout)}>delete</span>
            </li>
          ))
        }
      </ul>
      <Form />
    </div>
  )
}