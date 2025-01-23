import React, { useState, useEffect } from "react";
import "./style.scss";

const PageNumbersButton = ({ responsiveStyles = {} }) => {
  const [activePage, setActivePage] = useState(1);
  const [appliedStyles, setAppliedStyles] = useState({});

  const pageNumbersButtons = [
    { btnName: "1", page: 1 },
    { btnName: "2", page: 2 },
    { btnName: "3", page: 3 },
    { btnName: "Next", page: "next" },
  ];

  const handlePageClick = (page) => {
    if (page !== "next") {
      setActivePage(page);
    } else {
      setActivePage((prev) => (prev < 3 ? prev + 1 : 1));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let updatedStyles = {};

      if (width <= 480) {
        updatedStyles = responsiveStyles.mobile || {};
      } else if (width <= 768) {
        updatedStyles = responsiveStyles.tablet || {};
      } else {
        updatedStyles = responsiveStyles.desktop || {};
      }

      setAppliedStyles(updatedStyles);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [responsiveStyles]);

  return (
    <div className="pageNumbers">
      {pageNumbersButtons.map((button, index) => (
        <button
          key={index}
          className={`pageNumbersButton ${
            activePage === button.page ? "currentPage" : "normalPage"
          }`}
          onClick={() => handlePageClick(button.page)}
          style={appliedStyles}
        >
          {button.btnName}
        </button>
      ))}
    </div>
  );
};

export default PageNumbersButton;
