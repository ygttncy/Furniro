import { useState, useEffect } from "react"
import StarRating from "../StarRating/StarRating.jsx"
import "./style.scss"
import { Link } from "react-router-dom"
import useSWR from "swr"

async function fetcher(url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error("Product not found")
  return response.json()
}

const BestSellers = () => {
  const [products, setProducts] = useState([])

  const { data, error, isLoading } = useSWR(
    `https://672b2ff4976a834dd025f8f2.mockapi.io/api/furniture/furnitures`,
    fetcher
  )

  useEffect(() => {
    if (data) {
      const filteredProducts = data.filter(
        (product) => product.id >= 13 && product.id <= 16
      )
      setProducts(filteredProducts)
    }
  }, [data])

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>

  return (
    <div className="best-seller">
      <h2>Best Sellers</h2>
      <div className="clothes">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="product">
              <img
                src={product.images[1]}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <StarRating rating={product.rating} />
                <div className="price-info">
                  <span className="original-price">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="current-price">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BestSellers
