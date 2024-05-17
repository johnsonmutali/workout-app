import {
  //import createContext hook
  createContext,
  useReducer
} from "react"

//invoke the createContext function and store it in a value that can be
//exported
export const WorkoutContext = createContext()

const workoutReducer = (action, payload) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return { workouts: action.payload }
    case "SET_WORKOUTS":
      return { workouts: action.payload }
    default:
      return state;
  }
}

export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, {
    workouts: null
  })
  return (
    //use the workoutContext 
    <WorkoutContext.Provider value={{state, dispatch}}>
      {children}
    </WorkoutContext.Provider>
  )
}