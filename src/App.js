import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Orders from "./Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import {loadStripe } from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import {items} from './items'

const promise = loadStripe('pk_test_51IAcl5B2F0WPSCgVDHPUP0Jki5SmIZVdoFWW7n6cdHiXXZWLksSiYHsBWB0B9YuG1IEGBaSct66tVeSPzgnnQRlc00RQveVKZu');
const reinitItems = items;
 

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: "SET_ITEMS",
      payload: items,
    })

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is loggin
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //any cleanup operations go in here
      unsubscribe();
    };
  }, []);

  return (
    <div className="app">
      <Router>
        <Switch>
        <Route path="/orders"> 
           <Header reinitItems={reinitItems}/>   
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header reinitItems={reinitItems}/>
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header reinitItems={reinitItems}/>
            <Elements stripe={promise}>
               <Payment />
            </Elements>        
          </Route> 
          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Header reinitItems={reinitItems}/>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

