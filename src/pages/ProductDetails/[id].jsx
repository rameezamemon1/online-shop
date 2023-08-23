"use client";

// import "./ProductDetails.css";
// import "../../components/css/Header.css";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { useDispatch } from "react-redux";
import { add } from "../../Redux/Cartslice";
import { useSelector } from "react-redux";

function ProductDetail() {
  const [data, setData] = useState([]);
  const { selectedSymbol, selectedCurrency } = useSelector(
    (state) => state.cart
  );
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function dataList() {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();

      setData(data);
    }
    dataList();
  }, [router]);
  const [rates, setRates] = useState({});

  const dispatch = useDispatch();

  const addHandle = () => {
    dispatch(add(data));
  };
  const calculatePrice = (value) => {
    return Math.floor(value * rates[selectedCurrency]);
  };
  useEffect(() => {
    async function dataList() {
      const resRates = await fetch(
        "http://data.fixer.io/api/latest?access_key=44aac3e52f083b8cc52fce3d655a073f"
      );
      const dataRates = await resRates.json();
      setRates(dataRates?.rates);
    }
    dataList();
  }, []);
  return (
    <>
      <Link href="/" className="link">
        <div className="back-btn">Back to Home</div>
      </Link>
      <div className="product-container">
        <div className="image-container">
          <Image
            src={data?.thumbnail}
            alt="image"
            className="p-image"
            width="600"
            height="300"
          />
        </div>
        <div className="p-details">
          <div className="p-title">
            <strong>{data?.title}</strong>
          </div>
          <div className="p-description">{data?.description}</div>
          <div className="p-ratings">
            <FontAwesomeIcon
              icon={faStarHalfStroke}
              style={{ color: "#d1e31e" }}
              className="p-star"
            />
            <p className="p-rating">{data?.rating}</p>
          </div>
          <div className="p-price-container">
            <div className="p-price">
              <strong>{`${selectedSymbol}${calculatePrice(
                data.price
              )}`}</strong>
            </div>
            <div className="p-discount">{`-${data?.discountPercentage}`}</div>
          </div>
          <div className="p-stock">In Stock: {data?.stock}</div>
          <div className="p-brand">Brand: {data?.brand}</div>
          <div className="p-category">Category: {data?.category}</div>
          <button
            className="add-to-bag"
            onClick={(product) => addHandle(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
