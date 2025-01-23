import "./layout.scss"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

export function Layout() {
  return (
    <>
      <Navbar />

      <Outlet />
      <Footer />
    </>
  )
}
