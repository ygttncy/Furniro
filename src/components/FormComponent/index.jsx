import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./style.scss"
import GoogleIcon from "../../../src/assets/Google.svg"
import GitHubIcon from "../../../src/assets/GitHub.svg"

import RegisterForm from "./RegisterForm"
import LoginForm from "./LoginForm"
import ContactForm from "./ContactForm"
import BillingDetailsForm from "./BillingDetailsForm"

const FormComponent = ({ page, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    streetAddress: "",
    city: "",
    province: "",
    zipCode: "",
    phone: "",
    email: "",
  })

  const [errors, setErrors] = useState({})

  const handleChange = (id, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  const validateForm = () => {
    const newErrors = {}
    for (const field in formData) {
      if (
        formData[field] === "" &&
        (field !== "confirmPassword" || formData.password !== "")
      ) {
        newErrors[field] = `${field} is required`
      }
    }
    if (
      formData.password &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateLoginForm = () => {
    const loginErrors = {}
    if (!formData.email) loginErrors.email = "Email is required"
    if (!formData.password) loginErrors.password = "Password is required"
    setErrors(loginErrors)
    return Object.keys(loginErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (page === "login") {
      if (validateLoginForm()) onSubmit(formData)
    } else if (validateForm()) {
      onSubmit(formData)
    }
  }

  const isFormValidForRegister = () => {
    return (
      formData.fullName &&
      formData.email &&
      formData.password &&
      formData.confirmPassword &&
      formData.password === formData.confirmPassword &&
      !errors.confirmPassword
    )
  }

  const isFormValidForLogin = () => {
    return formData.email && formData.password && !errors.password
  }

  const preventNavigation = (e, isFormValid) => {
    if (!isFormValid) {
      e.preventDefault()
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {page === "register" && (
          <>
            <RegisterForm
              formData={formData}
              handleChange={handleChange}
              errors={errors}
            />
            <div className="divider">- OR -</div>
            <div className="signup-buttons">
              <Link to="/signup/github" className="additional-info-btn">
                <img src={GitHubIcon} alt="GitHub icon" className="icon" />
                Sign up with GitHub
              </Link>
              <Link to="/signup/google" className="additional-info-btn">
                <img src={GoogleIcon} alt="Google icon" className="icon" />
                Sign up with Google
              </Link>
            </div>
            <div className="login-info">
              Already have an account?
              <Link to="/login" className="login-link">
                Log in
              </Link>
            </div>
            <Link
              to="/"
              className={`create-account-btn ${
                !isFormValidForRegister() ? "disabled" : ""
              }`}
              onClick={(e) => preventNavigation(e, isFormValidForRegister())}
            >
              Create Account
            </Link>
          </>
        )}

        {page === "login" && (
          <>
            <LoginForm
              formData={formData}
              handleChange={handleChange}
              errors={errors}
            />
            <div className="divider">- OR -</div>
            <div className="signup-buttons">
              <Link to="/login/github" className="additional-info-btn">
                <img src={GitHubIcon} alt="GitHub icon" className="icon" />
                Log in with GitHub
              </Link>
              <Link to="/login/google" className="additional-info-btn">
                <img src={GoogleIcon} alt="Google icon" className="icon" />
                Log in with Google
              </Link>
            </div>
            <Link
              to="/"
              className={`lgn-btn ${!isFormValidForLogin() ? "disabled" : ""}`}
              onClick={(e) => preventNavigation(e, isFormValidForLogin())}
            >
              Log In
            </Link>
          </>
        )}

        {page === "contact" && (
          <>
            <ContactForm
              formData={formData}
              handleChange={handleChange}
              errors={errors}
            />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </>
        )}

        {page === "billing" && (
          <>
            <BillingDetailsForm
              formData={formData}
              handleChange={handleChange}
              errors={errors}
            />
            <Link to="#" className=" billing-btn">
              Additional Information
            </Link>
          </>
        )}
      </form>
    </div>
  )
}

FormComponent.propTypes = {
  page: PropTypes.oneOf(["register", "login", "contact", "billing"]),
  onSubmit: PropTypes.func,
}

export default FormComponent
