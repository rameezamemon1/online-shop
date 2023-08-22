// import "./css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faSquareTwitter,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="socials-container">
          <div className="follow-us">Follow us</div>
        </div>
        <div className="right-container">
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
