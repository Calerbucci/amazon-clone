import React, { useState } from "react";
import "./Signup.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Signup() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const register = (event) => {
    event.preventDefault();
    //register logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // create user and login
        auth.user.updateProfile({
          displayName: name
        })
        history.push("/login");
        alert("sucessful");
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
        <h1>Create account</h1>
        <form>
          <h5>Your name</h5>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
          />
          <h5>Email</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" onClick={register} className="login__signinbtn">
            Create your Amazon account
          </button>
        </form>
        <p>
          By creating an account, you agree to Amazon's Conditions of Use and
          Privacy Notice.
        </p>

        <div className="signup__reg">
          <p> Already have an account? </p>
          <Link to="/login" className="backto__signin">
            <p>Sign-in</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
