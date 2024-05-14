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
      <div className="header">
        <NavLink to="/" className="logo">h_gym</NavLink>
        <div className="nav">
          <NavLink to="/">home</NavLink>
          <NavLink to="gym">gym</NavLink>
          <NavLink to="about">about</NavLink>
        </div>
        <div className="profile-toggle">
          <div className="drop-dowm">
            <NavLink to="#">log in</NavLink>
            <NavLink to="#">log out</NavLink>
            <NavLink to="">sign up</NavLink>
          </div>
        </div>
      </div>
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div >
  )
}