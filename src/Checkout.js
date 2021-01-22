import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="/"
        />

        {basket?.length === 0 ? (
          <div className="checkout__empty">
            <h2 className="checkout__title">Your shopping Cart is empty</h2>
            <p className="checkout__text">
              You have no items in your basket. To buy one or more items click
              "Add to cart" next to the item
            </p>
          </div>
        ) : (
          <div className="checkout__full">
            <h2 className="checkout__title">Your shopping Cart</h2>
            
            {basket.map((baskt) => (
              <CheckoutProduct
                id={baskt.id}
                image={baskt.image}
                title={baskt.title}
                price={baskt.price}
                rating={baskt.rating}
              />
            ))}
          </div>
        )}
      </div>

      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
