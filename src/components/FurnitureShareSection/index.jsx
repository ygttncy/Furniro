import "./style.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../../assets/FurnitureShareSection/Furniture1.png";
import Img2 from "../../assets/FurnitureShareSection/Furniture2.png";
import Img3 from "../../assets/FurnitureShareSection/Furniture3.png";
import Img4 from "../../assets/FurnitureShareSection/Furniture4.png";
import Img5 from "../../assets/FurnitureShareSection/Furniture5.png";
import Img6 from "../../assets/FurnitureShareSection/Furniture6.png";
import Img7 from "../../assets/FurnitureShareSection/Furniture7.png";
import Img8 from "../../assets/FurnitureShareSection/Furniture8.png";
import Img9 from "../../assets/FurnitureShareSection/Furniture9.png";

const images1 = [
  { id: "one", img: Img1 },
  { id: "two", img: Img2 },
  { id: "three", img: Img3 },
  { id: "four", img: Img4 },
];

const images2 = [
  { id: "five", img: Img5 },
  { id: "six", img: Img6 },
  { id: "seven", img: Img7 },
  { id: "eight", img: Img8 },
  { id: "nine", img: Img9 },
];
const images3 = [
  { id: "five", img: Img5 },
  { id: "six", img: Img6 },
  { id: "seven", img: Img7 },
  { id: "eight", img: Img8 },
  { id: "nine", img: Img9 },
];

const FurnitureShareSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  const settingsRtl = {
    ...settings,
    rtl: true,
  };
  return (
    <div className="share-section-container">
      <div className="title-container">
        <h5 className="little-title">Share your setup with</h5>
        <h2 className="big-title">#FurniroFurniture</h2>
      </div>
      <div className="slider-container">
        <Slider className="image-row" {...settings}>
          {images1.map((image, index) => (
            <div key={index} className={`img ${image.id}`}>
              <img className="imgs" src={image.img} alt={`Image ${image.id}`} />
            </div>
          ))}
        </Slider>

        <Slider className="image-row" {...settingsRtl}>
          {images2.map((image, index) => (
            <div key={index} className={`img ${image.id}`}>
              <img className="imgs" src={image.img} alt={`Image ${image.id}`} />
            </div>
          ))}
        </Slider>

        <Slider className="image-row" {...settings}>
          {images3.map((image, index) => (
            <div key={index} className={`img ${image.id}`}>
              <img className="imgs" src={image.img} alt={`Image ${image.id}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FurnitureShareSection;
