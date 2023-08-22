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

function ProductDetail() {
  const [data, setData] = useState([]);

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

  console.log(data);
  const dispatch = useDispatch();

  const addHandle = () => {
    dispatch(add(data));
  };
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
              <strong>{`$${data?.price}`}</strong>
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
