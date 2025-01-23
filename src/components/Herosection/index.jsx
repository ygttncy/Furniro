import { useNavigate } from "react-router-dom"
import "../Herosection/style.scss"
const Herosection = () => {
  const navigate = useNavigate()

  const handleNavigation = (authType) => {
    navigate(authType)
  }

  return (
    <div className="herosection-main">
      <div className="herosection-background"></div>
      <div className="herosection-info">
        <h3 className="herosection-subtitle">New Arrival</h3>
        <h1 className="herosection-title">Discover Our </h1>
        <h1 className="herosection-title">New Collection</h1>
        <p className="herosection-text">
          Explore Furniros latest collection, where elegance meets innovation.
          Elevate your space with our brand-new, stylish furniture pieces.
          Redefine your home with the latest trends and timeless classics. Shop
          now!
        </p>
        <button
          className="herosection-info-btn"
          onClick={() => handleNavigation("/shop")}
        >
          {" "}
          BUY NOW
        </button>
      </div>
    </div>
  )
}
export default Herosection
