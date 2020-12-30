import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AppContext from "../context/AppContext";
import DarkMode from "./DarkMode";
import "../styles/components/Header.css";

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  const history = useHistory();

  const handleClick = () => {
    history.push("/checkout");
  };

  return (
    <div className="header">
      <div style={{ display: "flex" }}>
        <i class="fas fa-shopping-cart" onClick={handleClick} />
        {cart.length > 0 && (
          <div className="Header-alert">&nbsp; {cart.length}</div>
        )}
      </div>
      <Link to="/" className="header-link">
        <h1>Merchandising</h1>
      </Link>
      <DarkMode />
    </div>
  );
};

export default Header;
