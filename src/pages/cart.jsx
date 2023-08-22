"use-client";

// import "./css/Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';

import { remove, increaseQuantity, decreaseQuantity } from "../Redux/Cartslice";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
    const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart);
  console.log(auth)
  const removeHandle = (id) => {
    dispatch(remove(id));
  };

  const decreaseHandle = (id) => {
    // if (quantity > 1) {
    dispatch(decreaseQuantity(id));
    // setQuantity((prevCount) => prevCount - 1);
    // }
  };

  const increaseHandle = (id) => {
    dispatch(increaseQuantity(id));
    // if (quantity < 20) {
    //   setQuantity((prevCount) => prevCount + 1);
    // }
  };
  const totalCartQuantity = cartItems?.cartItems?.reduce(
    (total, currentItem) => total + currentItem.cartQuantity,
    0
  );
  const placeOrderFunction = () => {
    if(auth?.isLoggedIn===false){
      router.push('/signin');

    }
  };
  return (
    <>
      <div className="cart-header">
        <strong>Shopping Bag</strong>
      </div>
      <div className="cart-counter">
        {totalCartQuantity} items in the shopping bag
      </div>
      <div className="cart-container">
        {cartItems?.cartItems?.map((item, id) => (
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
                <button
                  className="decrease"
                  onClick={() => decreaseHandle(item.id)}
                >
                  -
                </button>
                <p className="counter">{item.cartQuantity}</p>
                <button
                  className="increase"
                  onClick={() => increaseHandle(item.id)}
                >
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
          <button className="place-order" onClick={placeOrderFunction}>
            Place Order
          </button>
        </div>
        <div className="sign-in-notice">To place an order, Sign in.</div>
      </div>
    </>
  );
}

export default Cart;
