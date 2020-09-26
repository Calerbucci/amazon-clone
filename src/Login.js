import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    //login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //do the login logic
        if (auth) history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__img"
          src="https://www.somagnews.com/wp-content/uploads/2020/01/c2-8-e1578775041342.jpg"
          alt="/"
        />
      </Link>

      <div className="login__info">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button type="submit" onClick={login} className="login__signinbtn">
            {" "}
            Sign in
          </button>
        </form>
        <p>
          By siging-in yoou agree to Amazon's Conditions of Use and Sale. Please
          see our privacy Notice, our Cookies Notice and our interest-Based ads
          notice.
        </p>

        <Link to="/signup">
          <button className="login__signupbtn"> Create an account</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
