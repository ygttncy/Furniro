import "./style.scss"
import ProductCard from "./ProductCard/index.jsx"
import PropTypes from "prop-types"

const ProductsContainer = ({ products }) => {
  return (
    <div className="product-container">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string,
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      originalPrice: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default ProductsContainer
