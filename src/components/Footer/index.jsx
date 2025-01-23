import "./styles.scss"
import { useState } from "react"
import FooterNavComponent from "../FooterNavComponent"

const footerLinks = [
  { path: "/", name: "Home" },
  { path: "/shop", name: "Shop" },
  { path: "/contact", name: "Contact" },
  { path: "/about", name: "About" },
]

const helpLinks = [
  { path: "/payment", name: "Payment Options" },
  { path: "/returns", name: "Returns" },
  { path: "/privacy", name: "Privacy Policy" },
]

const Footer = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    alert("Email submitted:", email)
  }

  return (
    <footer>
      <h2>Furniro.</h2>
      <section>
        <FooterNavComponent title="LINKS" links={footerLinks} />
        <FooterNavComponent title="HELP" links={helpLinks} />
        <div className="ftr__location">
          <h4>LOCATION</h4>
          <p>400 University Drive Suite 200 Coral Gables,</p>
          <p>FL 33134 USA</p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <h4>NEWSLETTER</h4>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email Address"
              required
            />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </section>
      <div className="ftr__bttm-info">
        <p>@2023 Furniro. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
