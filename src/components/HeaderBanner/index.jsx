import "./style.scss"
import { useLocation } from "react-router-dom"

import bannerLogo from "../../assets/images/bannerLogo.png"
import BreadCrumbComponent from "../BreadCrumbComponent"

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const HeaderBanner = () => {
  const location = useLocation()
  const pathSegments = location.pathname.split("/").filter(Boolean)
  const pageTitle = capitalizeFirstLetter(pathSegments[0] || "Home")

  return (
    <div className={`banner-container`}>
      <div className="banner-content">
        <img src={bannerLogo} alt="logo" className="banner-logo" />
        <h1>{pageTitle}</h1>
        <BreadCrumbComponent />
      </div>
    </div>
  )
}

export default HeaderBanner
