import "./css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Logo from "../Image/Best Shop.png";

function Header() {
  return (
    <div className="header-container">
      <Image src={Logo} alt="logo" className="logo"></Image>
      <div className="header-left-container">
        <button className="sign-in-btn">Sign In</button>
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ color: "#9d9db5" }}
          className="cart"
        />
        <select className="currency" name="currency">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="PHP">PHP</option>
          <option value="PHP">IDR</option>
          <option value="PHP">AUD</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
