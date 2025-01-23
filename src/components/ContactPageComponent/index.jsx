import "./style.scss";
import address from "../../assets/images/contact/address.png";
import phone from "../../assets/images/contact/phone.png";
import clock from "../../assets/images/contact/clock.png";
import FromHandler from "../../components/FormHandler/FormHandler";
const ContactPageComponent = () => {
  return (
    <section className="contact-container">
      <div className="contact-info">
        <h2>Get In Touch With Us</h2>
        <p>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="contact-main-form">
        <div className="contact-details">
          <div className="contact-item">
            <img src={address} alt="address-img" />
            <span>
              Adress
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </span>
          </div>
          <div className="contact-item">
            <img src={phone} alt="phone-img" />
            <span>
              Phone
              <p>
                Mobile: (+84) 546-6789
                <br />
                Hotline: (+84) 456-6789
              </p>
            </span>
          </div>
          <div className="contact-item">
            <img src={clock} alt="clock-img" />
            <span>
              Working Time
              <p>
                Monday-Friday: 9:00 - 22:00
                <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </span>
          </div>
        </div>

        <div className="contact-form">
          <div className="form-div">
            <FromHandler page="contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageComponent;
