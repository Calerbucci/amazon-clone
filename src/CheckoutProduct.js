import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ image, id, title, rating, price, hideButton }) {
  const [, dispatch] = useStateValue();

  function removeFromBasket() {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  }
  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__img" alt="/" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <div className="checkoutProduct__price">
          <small>NTD</small>
          <strong>{price}</strong>
        </div>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span role="img" >
                {" "}
                &#11088;
              </span>
            ))}
        </div>
        {
          !hideButton && (<button onClick={removeFromBasket}> Remove from Cart </button>)
        }

        
      </div>
    </div>
  );
}

export default CheckoutProduct;
