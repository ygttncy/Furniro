import { useState, useEffect } from "react"
import "./style.scss"
import navbarlogo from "../../assets/images/navbarlogo.png"
import NavLinkComponent from "../NavLinkComponent"
import NavbarActions from "../NavbarActions"

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open")
    } else {
      document.body.classList.remove("menu-open")
    }
  }, [isMenuOpen])

  return (
    <div>
      <section className="navbar-section">
        <div className="n-logo">
          <img className="logo-img" src={navbarlogo} alt="logo" />
        </div>
        <div className="n-div">
          <NavLinkComponent
            className={`n-hamburger-menu ${isMenuOpen ? "active" : ""}`}
          />
          <div
            className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>
        <NavbarActions />
      </section>
    </div>
  )
}

export default NavBar
