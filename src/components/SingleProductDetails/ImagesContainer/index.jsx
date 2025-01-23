import { useState } from "react"
import PropTypes from "prop-types"

export const ImageGallery = ({ productImages }) => {
  const [mainImage, setMainImage] = useState(productImages[0])
  const [sideImages, setSideImages] = useState(productImages.slice(1))

  const handleImageClick = (clickedIndex) => {
    setSideImages((prevSideImages) => {
      const updatedImages = [...prevSideImages]
      updatedImages[clickedIndex] = mainImage
      return updatedImages
    })

    setMainImage(sideImages[clickedIndex])
  }

  const renderSmallImages = (images) => {
    return (
      images &&
      images.map((image, index) => (
        <div
          key={index}
          className="product-small-image-wrapper"
          onClick={() => handleImageClick(index)}
        >
          <img
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="product-small-image"
          />
        </div>
      ))
    )
  }

  return (
    <>
      <div className="product-images-main-wrapper">
        <img src={mainImage} alt="" className="product-images-main" />
      </div>
      <div className="product-small-images-container">
        {renderSmallImages(sideImages)}
      </div>
    </>
  )
}

ImageGallery.propTypes = {
  productImages: PropTypes.array,
}
