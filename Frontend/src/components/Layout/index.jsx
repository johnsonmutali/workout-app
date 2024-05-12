//pages
import "./index.scss"
import Footer from "../Footer"

//react
import {
  NavLink,
  Outlet
} from "react-router-dom"

export default function Layout() {
  return (
    <div id="container">
      <div class="header">
        <div class="logo">h_gym</div>
        <nav class="nav">
          <NavLink to="/">home</NavLink>
          <NavLink to="gym">gym</NavLink>
          <NavLink to="about">about</NavLink>
        </nav>
        <div class="profile-toggle">
          <div class="drop-dowm">
            <NavLink to="#">log in</NavLink>
            <NavLink to="#">log out</NavLink>
            <NavLink to="">sign up</NavLink>
          </div>
        </div>
      </div>
      <div class="main">
        <Outlet />
      </div>
      <Footer />
    </div >
  )
}