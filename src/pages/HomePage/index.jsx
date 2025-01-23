import "./style.scss"
import OurProductsSectionComponent from "../../components/OurProductsSectionComponent"
import TopCategories from "../../components/TopCategories"
import CarouselComponent from "../../components/CarouselComponent"
import FurnitureShareSection from "../../components/FurnitureShareSection"
import Herosection from "../../components/Herosection"

const HomePage = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
        <Herosection />
        <TopCategories />
        <div className="allproduct-container">
          <h1 className="title">Our Products</h1>
          <OurProductsSectionComponent />
        </div>
        <CarouselComponent />
        <FurnitureShareSection />
      </div>
    </>
  )
}

export default HomePage
