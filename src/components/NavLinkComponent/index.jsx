/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

 const NavLinkComponent = ({ className }) => {
  const links = [
    { path: "/", name: "Home" },
    { path: "/shop", name: "Shop" },
    { path: "/contact", name: "Contact" },
    { path: "/about", name: "About" },
  ];

  return (
    <ul className={className}>
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};


export default NavLinkComponent;