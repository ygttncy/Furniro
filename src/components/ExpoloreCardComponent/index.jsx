
import "./style.scss";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import vector from "../../assets/Vector-1.svg";
import PropTypes from "prop-types";



const ExploreCard = ({ image, title, description, roomType }) => {
  return (
    <div className="explore-card-wrapper">
      <div className="products-wrapper">
        <img src={image} alt={title} className="product-image" />

        <div className="info-container">
          <div className="info-section">
            <div className="info-top">
              <h6>
                <span>{roomType}</span>
                <img src={vector} alt="vector divider" className="vector-divider" />
                <span>{description}</span>
              </h6>
            </div>
            <div className="info-bottom">
              <h3>{title}</h3>
            </div>
          </div>

          <div className="redirect-button">
            <Link to="#">
              <img src={arrow} alt="Arrow" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};






ExploreCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  roomType: PropTypes.string.isRequired,
};

export default ExploreCard;
