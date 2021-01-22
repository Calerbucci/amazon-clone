import React, {useState, useEffect} from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import {getBasketTotal} from './reducer';
import CurrencyFormat from "react-currency-format";
import axios from './axios'
import { db } from './firebase'


function Payment() {
  const [{ basket, user}, dispatch] = useStateValue();
  const history = useHistory();
  

  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing]= useState("");
  const [succeeded, setSucceeded]= useState(false);
  const [error, setError]= useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //special stripe secret that aloows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios ({
        method: 'post',
        //stripe expects the total ina currencies submit
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      });
        setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
  }, [basket])

  console.log("Secret is" , clientSecret);

  const handleSubmit = async (e) => {
      e.preventDefault();
      setProcessing(true);

       const payload = await stripe.confirmCardPayment(clientSecret, {
         payment_method: {
           card: elements.getElement(CardElement)
         }
       }).then(( { paymentIntent }) => {
          // payment intent = payment confirmation

          db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created
          })

          setSucceeded(true);
          setError(null);
          setProcessing(false); 
          
          dispatch({
            type: 'EMPTY_BASKET'
          })

          history.replace('/orders')   
       })
  }

const handleChange = e => {
    //listen for changes in the card element
    // and display any errors as the customer types their card details
    setDisabled(e.empty);
    setError(e.error? e.error.message : "");
}
 
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
          <div className="payment__detail">
            {/* Stripe functionality */}

            <form onSubmit= {handleSubmit}>
              <CardElement onChange={handleChange}/>

              <div className='payment_priceCont'>
              <CurrencyFormat
              renderText={(value) => (
           <h3>Order Total: {value}</h3>
          
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"TWD"}
      />
            <button disabled={processing || disabled || succeeded}>
                      <span>{ processing ? <p> Processing</p> : "Buy Now"}</span>
            </button>
              </div>
                {error && <div>{error}</div>}
            </form>
            
            </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
