import PropTypes from "prop-types"
import InputField from "./InputField"

const RegisterForm = ({ formData, handleChange, errors }) => (
  <div>
    <InputField
      id="fullName"
      name="fullName"
      label="Full Name"
      type="text"
      value={formData.fullName}
      onChange={handleChange}
      placeholder="Full Name"
      required
      error={errors.fullName}
    />
    <InputField
      id="email2"
      name="email"
      label="Email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Email"
      required
      error={errors.email}
    />
    <InputField
      id="password"
      name="password"
      label="Password"
      type="password"
      value={formData.password}
      onChange={handleChange}
      placeholder="Password"
      required
      error={errors.password}
    />
    <InputField
      id="confirmPassword"
      name="confirmPassword"
      label="Confirm Password"
      type="password"
      value={formData.confirmPassword}
      onChange={handleChange}
      placeholder="Confirm Password"
      required
      error={
        errors.confirmPassword ||
        (formData.password !== formData.confirmPassword &&
          "Passwords do not match")
      }
    />
  </div>
)

RegisterForm.propTypes = {
  formData: PropTypes.shape({
    fullName: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func,
  errors: PropTypes.object,
}

export default RegisterForm
