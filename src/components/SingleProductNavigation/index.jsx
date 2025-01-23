import "./styles.scss";
import BreadCrumbComponent from "../BreadCrumbComponent/index";

function ProductNavigation({ id }) {
  return (
    <div className="product-navigation-content">
      <BreadCrumbComponent id={id} type="subBreadCrumbs" />
    </div>
  );
}
export default ProductNavigation;