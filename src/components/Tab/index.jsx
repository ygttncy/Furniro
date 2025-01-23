import "./style.scss"
import PropTypes from "prop-types"
import { useState } from "react"
import useSWR from "swr"

async function fetcher(url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error("Product not found")
  return response.json()
}

export const Tab = ({ id }) => {
  const [selectedTab, setSelectedTab] = useState("Description")

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

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Description":
        return (
          <>
            <div className="tab__extras">
              {Object.entries(product.extras.detailedDescriptions).map(
                // eslint-disable-next-line no-unused-vars
                ([key, value], index) => (
                  <div key={index}>
                    <p>{value}</p>
                  </div>
                )
              )}
            </div>
          </>
        )
      case "Additional Information":
        return (
          <>
            <div className="tab__extras">
              <div className="table-container">
                <table className="responsive-table">
                  <tbody>
                    {Object.entries(product.extras.specifications).map(
                      ([key, value], index) => (
                        <tr key={index}>
                          <th>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                          {""}
                          <td>{value}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )
      case "Reviews":
        return (
          <>
            <div className="tab__extras">
              {Object.entries(product.extras.reviews).map(
                // eslint-disable-next-line no-unused-vars
                ([key, value], index) => (
                  <div key={index} className="tab__review">
                    <div className="reviews__meta">
                      <h4>{value.name}</h4>
                      <p>{value.date}</p>
                    </div>
                    <p>{value.message}</p>
                  </div>
                )
              )}
            </div>
          </>
        )
      default:
        return "Section could not have been rendered"
    }
  }

  const calculateReviewCount = () => {
    const reviews = product.extras.reviews
    let reviewCount = 0

    reviews.forEach(() => {
      reviewCount += 1
    })

    return reviewCount
  }

  return (
    <div>
      <div className="tab-container">
        <div className="tab__switches">
          <h3
            className={selectedTab === "Description" ? "toggle-color " : ""}
            onClick={() => setSelectedTab("Description")}
          >
            Description
          </h3>
          <h3
            className={
              selectedTab === "Additional Information" ? "toggle-color " : ""
            }
            onClick={() => setSelectedTab("Additional Information")}
          >
            Additional Information
          </h3>
          <h3
            className={selectedTab === "Reviews" ? "toggle-color " : ""}
            onClick={() => setSelectedTab("Reviews")}
          >
            Reviews [{calculateReviewCount()}]
          </h3>
        </div>
        {renderTabContent()}
        <div className="tab__images">
          <div className="img__wrapper">
            <img src={product.extras.extraImages[0]} alt="awd" />
          </div>
          <div className="img__wrapper">
            <img src={product.extras.extraImages[1]} alt="awd" />
          </div>
        </div>
      </div>
    </div>
  )
}

Tab.propTypes = {
  product: PropTypes.object,
  id: PropTypes.number,
}
