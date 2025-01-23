/* eslint-disable no-unused-vars */
import React from "react"
import PropTypes from "prop-types"
import InputField from "./InputField"

const ContactForm = ({ formData, handleChange }) => (
  <>
    <InputField
      id="name"
      label="Your Name"
      type="text"
      value={formData.name}
      onChange={handleChange}
      placeholder="Enter your name"
    />
    <InputField
      id="email"
      label="Email Address"
      type="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Enter your email"
    />
    <div className="input-field-container">
      <label htmlFor="subject">Subject</label>
      <textarea
        id="subject"
        className="input-about"
        placeholder="Hi! I’d like to ask about..."
        value={formData.subject || ""}
        onChange={(e) => handleChange("subject", e.target.value)}
        name="subject"
      />
    </div>
  </>
)

ContactForm.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    subject: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func,
}

export default ContactForm
