import "./style.scss"
import { useState, useEffect } from "react"
import FormHandler from "../FormHandler/FormHandler"
function ProductCheckoutDetailsComponent() {
  const [selectedPayment, setSelectedPayment] = useState("bank-transfer")
  const [products, setProducts] = useState()
  const getPaymentNote = () => {
    if (selectedPayment === "bank-transfer") {
      return "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account."
    } else if (selectedPayment === "cash-on-delivery") {
      return "Please have the exact amount ready. Your payment will be collected upon delivery."
    }
  }

  const getPaymentTitle = () => {
    return selectedPayment === "bank-transfer"
      ? "Direct Bank Transfer"
      : "Cash On Delivery"
  }

  useEffect(() => {
    const cartData = localStorage.getItem("Cart")
    if (cartData) {
      try {
        const parsedData = JSON.parse(cartData)
        setProducts(parsedData)
      } catch (error) {
        console.error("Cart verisi parse edilemedi:", error)
      }
    }
  }, [])

  const calculateTotal = () => {
    return (
      products &&
      products
        .reduce((total, product) => {
          return total + product.price * (product.quantity || 1)
        }, 0)
        .toFixed(2)
        .toLocaleString()
    )
  }

  return (
    <section className="product-summary">
      <div className="billing-details">
        {" "}
        <FormHandler page="billing" />{" "}
      </div>

      <div className="product-detail">
        <div className="order-summary">
          <div className="detail-header">
            <h2>Product</h2>
            <h2>Subtotal</h2>
          </div>

          <div className="detail-item-container">
            {products &&
              products.map((product, index) => (
                <div key={index} className="detail-item">
                  <span className="product-name">
                    {product.name} <span className="product-amount"> x 1</span>
                  </span>
                  <span>$ {product.price.toLocaleString()}</span>
                </div>
              ))}
          </div>

          <div className="subtotal">
            <span>Subtotal</span>
            <span>{calculateTotal()}</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span className="total-price">$ {calculateTotal()}</span>
          </div>
        </div>

        <div className="payment-div">
          <div className="selected-payment-container">
            <input
              type="radio"
              className="hidden-radio"
              checked={false}
              disabled
            />
            <span className="selected-payment">{getPaymentTitle()}</span>
          </div>
          <p className="payment-note">{getPaymentNote()}</p>
        </div>

        <div className="payment-methods">
          <label>
            <input
              type="radio"
              name="payment"
              value="bank-transfer"
              checked={selectedPayment === "bank-transfer"}
              onChange={() => setSelectedPayment("bank-transfer")}
            />
            Direct Bank Transfer
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="cash-on-delivery"
              checked={selectedPayment === "cash-on-delivery"}
              onChange={() => setSelectedPayment("cash-on-delivery")}
            />
            Cash On Delivery
          </label>
        </div>

        <p className="privacy-note">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <span className="highlight">privacy policy</span>.
        </p>

        <button className="place-order">Place order</button>
      </div>
    </section>
  )
}

export default ProductCheckoutDetailsComponent
