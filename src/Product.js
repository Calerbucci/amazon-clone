import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";


function Product({ image, title, rating, price, id }) {
  const [, dispatch] = useStateValue();

  function addTobasket() {
    //add to basket functionality
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        id: id,
        title: title,
        image: image,
        rating: rating,
        price: price,
      },
    });
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <div className="product__price">
          <small>TWD</small>
          <strong>{price}</strong>
        </div>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span role="img" aria-describedby>
                {" "}
                🌟
              </span>
            ))}
        </div>
      </div>

      <img src={image} alt="" className="product__img" />
      <button onClick={addTobasket} className="product__btn">
        {" "}
        Add to cart{" "}
      </button>
    </div>
  );
}

export default Product;
