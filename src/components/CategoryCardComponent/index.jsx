import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./style.scss"
import Dining from "../../assets/Home/dining.png"
import Living from "../../assets/Home/living.png"
import Bedroom from "../../assets/Home/bedroom.png"

const CategoryCard = ({
  title = "Browse The Range",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  categories = [
    { name: "Dining", image: Dining },
    { name: "Living", image: Living },
    { name: "Bedroom", image: Bedroom },
  ],
}) => {
  return (
    <div className="category-card">
      <h2 className="category-card__title">{title}</h2>
      <p className="category-card__description">{description}</p>
      <div className="category-card__grid">
        {categories.map((category, index) => (
          <Link
            to={`/${category.name.toLowerCase()}`}
            key={index}
            className="category-card__item"
          >
            <div className="category-card__image-container">
              <img
                src={category.image}
                alt={category.name}
                className="category-card__image"
              />
            </div>
            <h3 className="category-card__category-name">{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

CategoryCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
}

export default CategoryCard
