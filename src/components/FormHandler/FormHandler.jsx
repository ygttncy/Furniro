/* eslint-disable react/prop-types */
import FormComponent from "../FormComponent"

const FormHandler = ({ page }) => {
  const handleRegisterSubmit = (formData) => {
    console.log("Kayıt verileri:", formData)
  }

  const handleLoginSubmit = (formData) => {
    console.log("Giriş verileri:", formData)
  }

  const handleContactSubmit = (formData) => {
    console.log("İletişim verileri:", formData)
  }

  const handleBillingSubmit = (formData) => {
    console.log("Fatura Bilgileri:", formData)
  }

  return (
    <div>
      {page === "register" && (
        <FormComponent page="register" onSubmit={handleRegisterSubmit} />
      )}

      {page === "login" && (
        <FormComponent page="login" onSubmit={handleLoginSubmit} />
      )}

      {page === "contact" && (
        <FormComponent page="contact" onSubmit={handleContactSubmit} />
      )}

      {page === "billing" && (
        <FormComponent page="billing" onSubmit={handleBillingSubmit} />
      )}
    </div>
  )
}

export default FormHandler
