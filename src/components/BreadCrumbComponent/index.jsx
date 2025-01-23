import "./style.scss";
import { Link, useLocation } from "react-router-dom";
import right from "../../assets/images/right.png";
import useSWR from 'swr';


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
async function fetcher(url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error("Product not found")
  return response.json()
}



const BreadCrumbComponent = ({id, type}) => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const pageName = capitalizeFirstLetter(pathSegments[0] || "Home");
  console.log(id)
  const {
    data: product,
    error,
    isLoading,
  } = useSWR(
    id ? `https://672b2ff4976a834dd025f8f2.mockapi.io/api/furniture/furnitures/${id}` : null,
    fetcher
  );
  

  if (isLoading) return <p>Loading...</p>
  

  return (
    <nav className="banner-navigate">
      <Link to="/" className="home-link">
        Home
      </Link>
      <img src={right} alt="right-img" />
      <span className="banner-pagename">
  {pageName} 
  {type === "subBreadCrumbs" && (
    <>
      <img src={right} alt="right-img" />
      <span className="separator">|</span>
      {product.name}
    </>
  )}
</span>



    </nav>
  );
};

export default BreadCrumbComponent;

