import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AppContext from "../context/AppContext";
import DarkMode from "./DarkMode";
import "../styles/components/Header.css";

const Header = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/checkout");
  };

  return (
    <div className="header">
      <i class="fas fa-shopping-cart" onClick={handleClick} />
      <Link to="/" className="header-link">
        <h1>Merchandising</h1>
      </Link>
      <DarkMode />
    </div>
  );
};

export default Header;
