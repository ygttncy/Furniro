import HeaderBanner from "../../components/HeaderBanner";
import ContactPageComponent from "../../components/ContactPageComponent";
import FeaturesSection from "../../components/FeaturesSection/index";
import "./style.scss"
const ContactPage = () => {
  return (
    <>
      <HeaderBanner />
      <div className="main-container">
        <div className="contact-page">
          <ContactPageComponent />
        </div>
      </div>

      <FeaturesSection />
    </>
  );
};

export default ContactPage;
