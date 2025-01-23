import "./style.scss"
import { useNavigate } from "react-router-dom"
export const Drawer = () => {
  const navigate = useNavigate()

  const handleAuthNavigation = (authType) => {
    navigate(authType)
  }

  return (
    <div className="drawer-container">
      <div className="drawer-content">
        {" "}
        <div className="notification-container">
          <div className="notification">
            <ul>
              <li onClick={() => handleAuthNavigation("/auth?type=login")}>
                Login
              </li>
              <li onClick={() => handleAuthNavigation("/auth?type=register")}>
                Register
              </li>
              <li onClick={() => handleAuthNavigation("/")}>Log Out</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
