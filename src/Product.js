import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
export const Product = ({ id, title, price, rating, image }) => {
  const [{basket,user}, dispatch] = useStateValue()

  const addToBasket = ()=>{
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id,
        title,
        image,
        price,
        rating
      }
    })
  }
  return (
    <div className="product">
      <div className="product__info">
        <p>{title  }</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="Product Iamge" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};
