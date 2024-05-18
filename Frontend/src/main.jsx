import React from 'react'
import ReactDOM from 'react-dom/client'

//pages
import App from './App.jsx'
import { WorkoutContextProvider } from "./contexts/workoutsContext.jsx"
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WorkoutContextProvider>
      <App />
      </WorkoutContextProvider>
      </React.StrictMode>,
      )
