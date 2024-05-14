import "./index.scss"
import {
  useState, useEffect
} from "react"

export default function Gym() {
  const [workouts, setWorkouts] = useState(null)
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("gym")
      //const data = await response.json()
      console.log(response)
      if (response.ok) {
        setWorkouts(response)
      }
    }

    fetchWorkouts()
  }, [])

  return <h3> gym </h3 >
}