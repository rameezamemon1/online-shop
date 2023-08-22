"use client";

// import "./css/Header.css";
import Link from "next/link";

import Image from "next/image";
import Logo from "../Image/Best Shop.png";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state) => state.cart);
  const totalCartQuantity = cartItems?.cartItems?.reduce(
    (total, currentItem) => total + currentItem.cartQuantity,
    0
  );
  return (
    <div className="header-container">
      <Image src={Logo} alt="logo" className="logo"></Image>
      <div className="header-left-container">
        <button className="sign-in-btn">Sign In</button>
        <Link href={"/cart"} className="link">
          <button className="cart">Cart:{totalCartQuantity}</button>
        </Link>
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
