import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        {/* total items */}
        <h1>
          Checkout ( <Link to="/checkout"> {basket?.length} items </Link> )
        </h1>
        {/* adress */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__adress">
            <p> 101, Guanfu Road</p>
            <p> Hsinchu city</p>
            <p> Taiwan 300</p>
          </div>
        </div>
        {/* items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3> Reviews Items and Delivery</h3>
          </div>
          <div className="payment__items">
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
        </div>
        {/* payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__detail">{/* Stripe functionality */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
