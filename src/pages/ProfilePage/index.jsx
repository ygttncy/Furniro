import { useState, useEffect } from "react"
import ProfileForm from "../../components/ProfileForm"
import "./style.scss"
import profilephoto from "../../assets/profile/profilePhotoMock.png"
import HeaderBanner from "../../components/HeaderBanner"
import FeaturesSection from "../../components/FeaturesSection/index"
const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    image: profilephoto,
  })

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData")
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData))
    } else {
      localStorage.setItem("userData", JSON.stringify(userData))
    }
  }, [])

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = reader.result
        setUserData((prevData) => ({ ...prevData, ["image"]: base64String }))
        localStorage.setItem("userData", JSON.stringify(userData))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isEditing) {
      localStorage.setItem("userData", JSON.stringify(userData))
    }
    setIsEditing(!isEditing)
  }

  return (
    <>
      <HeaderBanner />

      <div className="profile-page">
        <ProfileForm
          userData={userData}
          isEditing={isEditing}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          onImageChange={handleImageChange}
        />
        <FeaturesSection />
      </div>
    </>
  )
}

export default ProfilePage
