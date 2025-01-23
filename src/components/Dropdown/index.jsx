import "./style.scss"
import PropTypes from "prop-types"
import CloseImg from "../../assets/icons/close-icon.svg"
import LineImg from "../../assets/images/line.svg"
import SelectedProduct from "./SelectedProduct"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
const Dropdown = ({ type, closeModal }) => {
  const [totalPrice, setTotalPrice] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([])
  const navigate = useNavigate()
  let modalContent = {}

  const calculateTotalPrice = (products) => {
    const total = products.reduce((total, product) => total + product.price, 0)
    return total.toFixed(2)
  }

  const fetchFromLocalStorage = async (storageType) => {
    const storageItems =
      (await JSON.parse(localStorage.getItem(storageType))) || []
    await setProducts(storageItems)
  }

  useEffect(() => {
    fetchFromLocalStorage(type)
  }, [])

  switch (type) {
    case "Cart":
      modalContent = {
        title: "Shopping Cart",
        buttons: ["Cart", "Checkout"],
        subtotal: ["Subtotal", totalPrice],
      }
      break
    case "Wishlist":
      modalContent = {
        title: "Wishlist",
      }
  }

  useEffect(() => {
    setTotalPrice(calculateTotalPrice(products))
  }, [products])

  const deleteProductHandler = (productId) => {
    let newProducts = products.filter((product) => productId !== product.id)
    localStorage.setItem(type, JSON.stringify(newProducts))
    console.log("deleted")
    setProducts(newProducts)

    window.dispatchEvent(
      new CustomEvent("localStorageChanged", {
        detail: {
          key: type,
          action: "delete",
          productId: productId,
        },
      })
    )
  }

  return (
    <div className="dropdown-wrapper">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{modalContent.title}</h5>
          <div className="close-img-box">
            <img
              className="close-img"
              src={CloseImg}
              alt=""
              onClick={closeModal}
            />
          </div>
        </div>

        <div className="line-box">
          <img className="line-img" src={LineImg} alt="" />
        </div>
        <div className="modal-products-container">
          {products.length !== 0 ? (
            products.map((product, key) => (
              <SelectedProduct
                key={key}
                type={type}
                product={product}
                deleteProduct={deleteProductHandler}
              />
            ))
          ) : (
            <p>`There are no products in your {type}</p>
          )}
        </div>
        <div className="modal-footer">
          {modalContent.subtotal && (
            <div className="subtotal-container">
              <p>{modalContent.subtotal[0]}</p>
              <p className="price"> $ {totalPrice}</p>
            </div>
          )}
          <div className="line-box">
            <img className="line-img" src={LineImg} alt="" />
          </div>
          {modalContent.buttons && (
            <div className="modal-btns">
              {modalContent.buttons.map((button, index) => (
                <button
                  key={index}
                  className="modal-btn"
                  onClick={() => navigate(`/${button}`)}
                >
                  {button}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dropdown

Dropdown.propTypes = {
  type: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
}
