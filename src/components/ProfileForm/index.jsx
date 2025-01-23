import FormInput from "../FormInput"
import PropTypes from "prop-types"
import "./style.scss"
import { useEffect } from "react"

const ProfileForm = ({
  userData,
  isEditing,
  onInputChange,
  onSubmit,
  onImageChange,
}) => {
  useEffect(() => {
    // const savedImage = localStorage.getItem("profileImage")
  }, [])

  return (
    <section className="profile-view-container">
      <div className="profile-img-container">
        <img id="profile-image" src={userData.image} alt="Profile" />

        <div className="profile__image-upload">
          <label htmlFor="file-input">Change profile picture</label>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={onImageChange}
            style={{ display: "none" }}
          />
        </div>
      </div>
      <form onSubmit={onSubmit} className="profile-form">
        <FormInput
          label="Your name"
          type="text"
          name="name"
          value={userData.name}
          onChange={onInputChange}
          placeholder="John Doe"
          readOnly={!isEditing}
        />
        <FormInput
          label="Email address"
          type="email"
          name="email"
          value={userData.email}
          onChange={onInputChange}
          placeholder="Abc@def.com"
          readOnly={!isEditing}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={userData.password}
          onChange={onInputChange}
          placeholder="********"
          readOnly={!isEditing}
        />
        <button type="submit">{isEditing ? "Save" : "Edit"}</button>
      </form>
    </section>
  )
}

ProfileForm.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onImageChange: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default ProfileForm
