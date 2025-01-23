import { useState } from "react"
import "./style.scss"
import PropTypes from "prop-types"

const GeneralButtons = ({
  btnName = "Button",
  width = "auto",
  height = "auto",
  backgroundColor = "#b88e2f",
  fontSize = "16px",
  borderColor = "#b88e2f",
  textColor = "#b88e2f",
  responsiveStyles = {},
  onClickCallback,
}) => {
  const [isActive, setIsActive] = useState(false)

  const toggleActive = () => {
    setIsActive((prev) => !prev)
  }

  return (
    <button
      className={`generalButton ${isActive ? "active" : ""}`}
      style={{
        width,
        height,
        backgroundColor: isActive ? "#ff9900" : backgroundColor,
        fontSize,
        border: `2px solid ${borderColor}`,
        color: textColor,
        ...responsiveStyles,
      }}
      onClick={onClickCallback || toggleActive} // Use toggleActive if onClickCallback is undefined
    >
      {btnName}
    </button>
  )
}

GeneralButtons.propTypes = {
  btnName: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  responsiveStyles: PropTypes.object,
  onClickCallback: PropTypes.func,
}

export default GeneralButtons
