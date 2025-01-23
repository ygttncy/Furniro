import "./style.scss"
import useSWR from "swr"
import PropTypes from "prop-types"
import StarRating from "../StarRating/StarRating"
import { ImageGallery } from "./ImagesContainer"

async function fetcher(url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error("Product not found")
  return response.json()
}

const ProductDetails = ({ id }) => {
  // const [quantity, setQuantity] = useState(1)

  const {
    data: product,
    error,
    isLoading,
  } = useSWR(
    `https://672b2ff4976a834dd025f8f2.mockapi.io/api/furniture/furnitures/${id}`,
    fetcher
  )

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>

  // const increaseQuantity = () => {
  //   setQuantity((prevQuantity) => prevQuantity + 1)
  // }

  // const decreaseQuantity = () => {
  //   setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1))
  // }

  const calculateReviewCount = () => {
    const reviews = product.extras.reviews
    let reviewCount = 0

    reviews.forEach(() => {
      reviewCount += 1
    })

    return reviewCount
  }

  const handleStorage = (key, product) => {
    const storageData = JSON.parse(localStorage.getItem(key) || "[]")

    const updatedData = [...storageData, product]

    localStorage.setItem(key, JSON.stringify(updatedData))
  }

  return (
    <div className="product-details">
      <div className="product-images">
        <ImageGallery productImages={product.images} />
      </div>
      <div className="product-content">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-price">{product.price}</p>
        <div className="reviews">
          <div className="rating">
            <StarRating rating={product.rating} />
          </div>
          <span className="bracket"></span>
          <span className="customer-review">
            {calculateReviewCount()} Customer Reviews
          </span>
        </div>
        <p className="description">{product.description}</p>
        <p className="color-label">Color</p>
        <div className="color-options">
          <span
            className="color-option"
            style={{ backgroundColor: "#7B61FF" }}
          ></span>
          <span
            className="color-option"
            style={{ backgroundColor: "#333" }}
          ></span>
          <span
            className="color-option"
            style={{ backgroundColor: "#b88e2f" }}
          ></span>
        </div>
        <div className="quantity-add-to-cart">
          {/* <div className="quantity-control">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div> */}
          <button
            className="add-to-cart"
            onClick={() => handleStorage("Cart", product)}
          >
            Add To Cart
          </button>
          {/* <button className="compare">+ Compare</button> */}
        </div>
        <div className="product-meta">
          <p>
            <strong>SKU: </strong> <span> {product.SKU}</span>
          </p>
          <p>
            <strong>Category: </strong> {product.Category}
          </p>
          <p>
            <strong> Sofa, Chair, Home, Shop: </strong>
            {product.Tags}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

ProductDetails.propTypes = {
  product: PropTypes.object,
  id: PropTypes.string,
}
