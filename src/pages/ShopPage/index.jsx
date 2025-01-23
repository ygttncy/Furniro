import HeaderBanner from "../../components/HeaderBanner"

import FeaturesSection from "../../components/FeaturesSection/index"
import OurProductsSectionComponent from "../../components/OurProductsSectionComponent"

import "./style.scss"

const ShopPage = () => {
  return (
    <>
      <HeaderBanner />
      <div className="allproduct-container" style={{ marginTop: "100px" }}>
        <OurProductsSectionComponent />
      </div>
      <FeaturesSection />
    </>
  )
}

export default ShopPage
