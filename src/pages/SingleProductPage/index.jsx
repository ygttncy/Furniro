import ProductDetails from "../../components/SingleProductDetails"
import { Tab } from "../../components/Tab"
import { useParams } from "react-router-dom"
import "./style.scss"
import ProductNavigation from "../../components/SingleProductNavigation"
const SingleProductPage = ({subBreadCrumbs}) => {
  const { id } = useParams()

  return (
    <div>
      <div>
        <ProductNavigation id={id} type={subBreadCrumbs} />
      </div>

      <main>
        <ProductDetails id={id} />
        <Tab id={id} />
      </main>
    </div>
  )
}

export default SingleProductPage

