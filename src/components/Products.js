import "./styles/Products.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsFromDatabase } from "../features/products/productsSlice";
const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProductsFromDatabase());
  }, [dispatch]); //Sadece dispatch değiştiğinde çalış
  return (
    <div className="product-wrapper">
      {products.map((item) => (
        <div key={item.title} className="product">
          <div className="product-img-box">
            <img
              className="product-img"
              src={item.url}
              alt={item.title}
            ></img>
          </div>
          <div className="product-title">
            <h3>{item.title}</h3>
          </div>
          <div className="product-price">{item.price}</div>
          <div className="product-buttons">
            <button className="product-button">Sepete Ekle</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Products;
