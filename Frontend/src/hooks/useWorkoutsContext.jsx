import { WorkoutContext } from "../contexts/workoutsContext.jsx"
import { useContext } from "react"

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutContext)
  if (!context) throw Error("No context available")
  return context
}