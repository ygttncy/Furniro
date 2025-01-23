import GeneralButtons from "../ButtonComponent/GeneralButtons"
import CartPageDesignChild from "./CartPageDesignChild"
import "./style.scss"
import { useNavigate } from "react-router-dom"

const CartPageDesign = () => {
  const navigate = useNavigate()

  const handleNav = () => {
    navigate(`/checkout`)
  }

  return (
    <div className="cart-page-design">
      <div className="cart-page-design-main">
        <CartPageDesignChild />
      </div>
      <div className="cart-page-btn">
        <GeneralButtons
          btnName="Checkout"
          textColor="white"
          width="150px"
          onClickCallback={() => handleNav()}
        />
      </div>
    </div>
  )
}

export default CartPageDesign
