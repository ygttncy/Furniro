/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const FooterNavComponent = ({ title, links }) => {
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterNavComponent
