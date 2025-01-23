import StarRating from "../../StarRating/StarRating"
import PropTypes from "prop-types"
import "./style.scss"
import { useEffect, useState } from "react"
import Wishlist from "../../../assets/Product/wishlist-black.svg?react"
import Detail from "../../../assets/Product/detail-group-empty.svg?react"
import Cart from "../../../assets/Product/cart-empty.svg?react"
import { useNavigate } from "react-router-dom"

const LOCAL_STORAGE_UPDATED = "localStorageUpdated"

const ProductCard = ({ product }) => {
  const navigate = useNavigate()
  const [colors, setColors] = useState({
    Wishlist: "transparent",
    Cart: "transparent",
  })

  const handleStorage = (key, product) => {
    const storageData = JSON.parse(localStorage.getItem(key) || "[]")
    const existingItem = storageData.find((item) => item.id === product.id)

    if (!existingItem) {
      const updatedData =
        key === "Cart"
          ? [...storageData, { ...product, quantity: 1 }]
          : [...storageData, product]

      localStorage.setItem(key, JSON.stringify(updatedData))
      setColors((prev) => ({ ...prev, [key.toLowerCase()]: "red" }))
    } else {
      const updatedData = storageData.filter((item) => item.id !== product.id)
      localStorage.setItem(key, JSON.stringify(updatedData))
      setColors((prev) => ({ ...prev, [key.toLowerCase()]: "transparent" }))
    }
    // Dispatch custom event
    window.dispatchEvent(
      new CustomEvent(LOCAL_STORAGE_UPDATED, {
        detail: { key },
      })
    )
  }

  const handleDetail = (productId) => {
    navigate(`/product/${productId}`)
  }

  const isInStorage = (storageKey, product) => {
    let allStorageItems = JSON.parse(localStorage.getItem(storageKey) || "[]")

    return Boolean(allStorageItems.find((item) => item.id === product.id))
  }

  const toggleColor = (icon) => {
    setColors((prevColors) => ({
      ...prevColors,
      [icon]: prevColors[icon] === "transparent" ? "red" : "transparent",
    }))
  }

  useEffect(() => {
    // Initial check
    setColors({
      Wishlist: isInStorage("Wishlist", product) ? "red" : "transparent",
      Cart: isInStorage("Cart", product) ? "red" : "transparent",
    })

    // Storage event listener for cross-tab changes
    const handleStorageChange = (e) => {
      if (e.key === "Wishlist" || e.key === "Cart") {
        setColors((prevColors) => ({
          ...prevColors,
          [e.key]: isInStorage(e.key, product) ? "red" : "transparent",
        }))
      }
    }

    const handleLocalChange = (e) => {
      const { key, productId } = e.detail
      if ((key === "Wishlist" || key === "Cart") && productId === product.id) {
        setColors((prevColors) => ({
          ...prevColors,
          [key]: isInStorage(key, product) ? "red" : "transparent",
        }))
      }
    }

    window.addEventListener("storage", handleStorageChange)
    window.addEventListener("localStorageChanged", handleLocalChange)

    // Cleanup
    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("localStorageChanged", handleLocalChange)
    }
  }, [product])

  return (
    <div className="product-card">
      <div className="product-image-container">
        <div className="product-control">
          <Wishlist
            onClick={() => {
              toggleColor("Wishlist")
              handleStorage("Wishlist", product)
            }}
            style={{
              fill: colors.Wishlist,
              cursor: "pointer",
              width: "30px",
              height: "30px",
            }}
          />
          <Detail
            onClick={() => {
              handleDetail(product.id)
            }}
            style={{
              cursor: "pointer",
              width: "30px",
              height: "30px",
            }}
          />
          <Cart
            onClick={() => {
              toggleColor("Cart")
              handleStorage("Cart", product)
            }}
            style={{
              fill: colors.Cart,
              cursor: "pointer",
              width: "30px",
              height: "30px",
            }}
          />
        </div>
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-image"
          onClick={() => {
            handleDetail(product.id)
          }}
        />
        <div className="products-discount">
          {product.discount ? (
            <p className="new-discount ">{product.discount}%</p>
          ) : (
            <p className="new-label">NEW</p>
          )}
        </div>
      </div>
      <h2 className="product-name">{product.name}</h2>
      <p className="product-info">{product["short-description"]}</p>
      <StarRating rating={product.rating} />
      <div className="product-price">
        <span className="discounted-price">${product.price}</span>
        <span className="original-price">${product.originalPrice}</span>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductCard
