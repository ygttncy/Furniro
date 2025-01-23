import React from "react";
import "./style.scss";
import DiningImage from "../../assets/images/dining.svg";
import LivingImage from "../../assets/images/living.svg";
import BedroomImage from "../../assets/images/bedroom.svg";

const TopCategories = () => {
  const categories = [
    { id: 1, title: "Dining", imgSrc: DiningImage },
    { id: 2, title: "Living", imgSrc: LivingImage },
    { id: 3, title: "Bedroom", imgSrc: BedroomImage },
  ];

  return (
    <div className="topCategories">
      <h2 className="title">Browse The Range</h2>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="grid">
        {categories.map((category) => (
          <div key={category.id} className="card">
            <img src={category.imgSrc} alt={category.title} className="image" />
            <p className="categoryTitle">{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
