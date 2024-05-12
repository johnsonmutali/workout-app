//pages
import Layout from "./components/Layout/index.jsx"
import Home from "./components/Home/index.jsx"
import Gym from "./components/Gym/index.jsx"
import About from "./components/About/index.jsx"

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom"


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route
          path="/"
          element={<Home />} />
        <Route
          path="/gym"
          element={<Gym />} />
        <Route
          path="/about"
          element={<About />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}