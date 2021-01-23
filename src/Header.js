import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";


function Header({reinitItems}) {
  const [searchFieldValue, setSearchFielValue] = useState("");
  const [{ basket, user}, dispatch] = useStateValue();

  const login = () => {
    if (user) auth.signOut();
  };


  const reinitializeState = () =>{
      dispatch({
        type:"SET_ITEMS",
        payload:reinitItems,
      })
  }

  const searchValue = () => {
    // console.log(searchFieldValue);
    dispatch({
      type: "SEARCH_ITEM",
      searchField: searchFieldValue,
    });
    setSearchFielValue("");
  };

  return (
    <nav className="header">
      <Link to="/">
        <img
          onClick={reinitializeState}
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="/"
        />
      </Link>

      <div className="header__search">
        <input
          className="header__searchInput"
          value={searchFieldValue}
          type="text"
          onChange={(event) => setSearchFielValue(event.target.value)}
        />
        <Link className="header__icons" onClick={searchValue}>
          <SearchIcon className="header__icon" />
        </Link>
      </div>

      <div className="header__nav">
        <Link className="header__Link" to={!user && "/login"}>
          <div onClick={login} className="header__option">
            <span className="header__linkOne">
              Hello, {!user ? "Guest" : user?.displayName == null ? user?.email : user?.displayName}
            </span>
            <span className="header__linkTwo">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>

        <Link className="header__Link" to="/orders">
          <div className="header__option">
            <span className="header__linkOne">Return</span>
            <span className="header__linkTwo">& Orders</span>
          </div>
        </Link>

        <Link className="header__Link" to="/">
          <div className="header__option">
            <span className="header__linkOne">Your</span>
            <span className="header__linkTwo">Prime</span>
          </div>
        </Link>

        <Link className="header__Link" to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon className="header__linkOneBasket" />
            <span className="header__linkTwo">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
