"use-client";

import "./css/Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

import { remove } from "../Redux/Cartslice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const [quantity, setQuantity] = useState(1);

  const removeHandle = (id) => {
    dispatch(remove(id));
  };

  const decreaseHandle = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  const increaseHandle = () => {
    if (quantity < 20) {
      setQuantity((prevCount) => prevCount + 1);
    }
  };

  return (
    <>
      <div className="cart-header">
        <strong>Shopping Bag</strong>
      </div>
      <div className="cart-counter">
        {cartItems.length} items in the shopping bag
      </div>
      <div className="cart-container">
        {cartItems.map((item, id) => (
          <div key={id} className="cart-card">
            <button
              className="remove-btn"
              onClick={() => removeHandle(item.id)}
            >
              <FontAwesomeIcon icon={faXmark} style={{ color: "#0266ff" }} />
            </button>
            <Link href={`/ProductDetails/${item.id}`} className="link">
              <Image
                src={item.thumbnail}
                alt="image"
                className="cart-image"
                width="250"
                height="150"
              />
            </Link>
            <div className="cart-details">
              <Link href={`/ProductDetails/${item.id}`} className="link">
                <div className="cart-title">
                  <strong>{item.title}</strong>
                </div>
              </Link>
              <div className="cart-price">
                <strong>{`$${item.price}`}</strong>
              </div>
              <div className="brand-category">
                <div className="cart-brand">{item.brand}</div>
                <div className="cart-category">{item.category}</div>
              </div>
              <div className="quantity">
                <button className="decrease" onClick={decreaseHandle}>
                  -
                </button>
                <p className="counter">{quantity}</p>
                <button className="increase" onClick={increaseHandle}>
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="total">
          <strong>Total:</strong>
        </div>
      </div>
      <div className="btns-container">
        <div className="buttons">
          <Link href="/" className="link">
            <button className="continue-shopping">Continue Shopping</button>
          </Link>
          <button className="place-order">Place Order</button>
        </div>
        <div className="sign-in-notice">To place an order, Sign in.</div>
      </div>
    </>
  );
}

export default Cart;
