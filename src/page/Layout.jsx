import { Outlet } from "react-router-dom"
import Navigation from "../component/Navigation"
import "./layout.css"

const Layout = () => {
  return (
    <div className="layout">
      <Navigation/>

      <Outlet/>
    </div>
  )
}

export default Layout