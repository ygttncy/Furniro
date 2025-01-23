import "./style.scss";
import ProductCard from "../ProductsContainer/ProductCard";
import { useState, useEffect } from "react";
import Button from "../ButtonComponent/GeneralButtons/index";

function RelatedProducts() {
  const [limit, setLimit] = useState(5);
  const [furnitures, setFurnitures] = useState([]);

  useEffect(() => {
    fetch(
      "https://672b2ff4976a834dd025f8f2.mockapi.io/api/furniture/furnitures"
    )
      .then((response) => response.json())
      .then((data) => setFurnitures(data));
  }, []);

  const handleShowMore = () => {
    if (limit < furnitures.length) {
      setLimit(furnitures.length);
    } else {
      setLimit(5);
    }
  };

  return (
    <div className="RelatedProductsCardContent">
      <h2 className="RelatedProductsCardContentTitle">Related Products</h2>
      <div className="RelatedProductsCard">
        {furnitures.slice(0, limit).map((furniture) => (
          <ProductCard key={furniture.id} product={furniture} />
        ))}
      </div>
      <Button
        btnName="Show More"
        width="clamp(100px, 51.45px + 13.81vw, 245px)"
        height="clamp(30px, 24px + 1.714vw, 48px)"
        backgroundColor="#FFFFFF"
        fontSize="clamp(10px, 1.5vw, 16px)"
        borderColor="#b88e2f"
        textColor="#b88e2f"
        responsiveStyles={{}}
        onClickCallback={handleShowMore}
      />
    </div>
  );
}

export default RelatedProducts;
