import {
  //import createContext hook
  createContext,
  useReducer
} from "react"

//invoke the createContext function and store it in a value that can be
//exported
export const WorkoutContext = createContext()

const ACTIONS = {
  SET_WORKOUT: "SET_WORKOUT",
  ADD_WORKOUT: "ADD_WORKOUT"
}

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUT":
      return {
        workouts: action.payload
      }
    case "ADD_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts]
      }

    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter(workout => {
          workout._id !== action.payload._id
        })
      }
    default:
      return state
  }
}


export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null
  })
  return (
    //use the workoutContext 
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider >
  )
}