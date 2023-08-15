"use client";

import Image from "next/image";
import "./css/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faStarHalfStroke,
  faStore,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [visible, setVisible] = useState(9);

  useEffect(() => {
    async function dataList() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setData(data);
      setFiltered(data.products);
    }
    dataList();
  }, []);

  const filterHandler = (e) => {
    setFiltered(
      data.products.filter((f) =>
        f.title.toLowerCase().includes(e.target.value)
      )
    );

    console.log(e.target.value);
  };

  const loadMoreHandler = () => setVisible((prevValue) => prevValue + 6);

  console.log(filtered);
  return (
    <>
      <div className="search-container">
        <input
          type="search"
          className="search"
          placeholder="Search..."
          onChange={filterHandler}
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "#9d9db5" }}
          className="search-btn"
        />
      </div>
      <div className="products-container">
        {filtered
          ? filtered.slice(0, visible).map((item, id) => {
              return (
                <div key={id} className="card">
                  <Image
                    src={item.thumbnail}
                    alt="image"
                    className="image"
                    width="300"
                    height="200"
                  />
                  <div className="details">
                    <div className="title">
                      <strong>{item.title}</strong>
                    </div>
                    <div className="description">{item.description}</div>
                    <div className="price-container">
                      <p className="price">
                        <strong>{`$${item.price}`}</strong>
                      </p>
                      <p className="discount">{`-${item.discountPercentage}`}</p>
                    </div>
                    <hr />
                    <div className="card-footer">
                      <div className="ratings">
                        <FontAwesomeIcon
                          icon={faStarHalfStroke}
                          style={{ color: "#d1e31e" }}
                          className="star"
                        />
                        <p className="rating">{item.rating}</p>
                        <FontAwesomeIcon
                          icon={faStore}
                          style={{ color: "#9d9db5" }}
                          className="shop"
                        />
                        <p className="stock">{item.stock}</p>
                        <button className="add-btn">
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            style={{ color: "white" }}
                            className="add-to-cart"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
      <button className="load-more-btn" onClick={loadMoreHandler}>
        Load More
      </button>
    </>
  );
}
