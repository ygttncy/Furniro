import React, { useState } from "react";
import "./style.scss";

const ProductAlbum = ({ images, onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    onImageSelect(image);
  };

  return (
    <div className="product-album">
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`product view ${index}`}
            onClick={() => handleImageClick(image)}
            className={`thumbnail ${image === selectedImage ? "selected" : ""}`}
          />
        ))}
      </div>
      <div className="image-preview">
        <img
          src={selectedImage}
          alt="Selected product view"
          className="main-image"
        />
      </div>
    </div>
  );
};

export default ProductAlbum;
