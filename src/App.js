import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from "./Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
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
      //any cleanup operationsgo in here
      unsubscribe();
    };
  }, []);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Payment />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
