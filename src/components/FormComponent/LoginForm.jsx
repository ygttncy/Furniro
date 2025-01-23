import PropTypes from "prop-types"
import InputField from "./InputField"

const LoginForm = ({ formData, handleChange, errors }) => (
  <>
    <InputField
      id="email"
      name="email"
      label="Email Address"
      type="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Enter your email"
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
      placeholder="Enter your password"
      required
      error={errors.password}
    />
  </>
)

LoginForm.propTypes = {
  formData: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func,
  errors: PropTypes.object,
}

export default LoginForm
