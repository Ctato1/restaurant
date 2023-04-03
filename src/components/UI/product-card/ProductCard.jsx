import React from "react";
import "../../../styles/product-card.css";

import { Link,useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = ({ item }) => {
  const { id, title, price, image01 } = item;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  const scrollTop =()=>{
    window.scrollTo(0,0)
  }

  const productDetails =()=>{
    scrollTop();
    navigate(`/foods/${id}`)
  }

  return (
    <div className="product__item">
      <div className="product__img" onClick={productDetails}>
        <img src={image01} alt="product" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`} onClick={scrollTop}>{title}</Link>
        </h5>
        <div className="product__content-bottom d-flex align-items-center justify-content-between">
          <span className="product__price">${price}</span>
          <button className="addToCart__btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
