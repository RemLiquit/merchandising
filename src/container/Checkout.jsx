import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import "../styles/container/Checkout.css";

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Lista de Pedidos - Praxi-store Merch</title>
      </Helmet>
      <div className="Checkout">
        <div className="Checkout-content">
          {cart.length > 0 ? (
            <h3>Lista de Articulos:</h3>
          ) : (
            <h3>Sin pedidos...</h3>
          )}
          {cart.map((item) => (
            <div className="Checkout-item">
              <div className="Checkout-element">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={item.image}
                    alt="image"
                    className="Checkout-image"
                  />
                  <h4>&nbsp; {item.title}</h4>
                </div>
                <span>${item.price}</span>
              </div>
              &nbsp;{" "}
              <i className="far fa-trash-alt" onClick={handleRemove(item)} />
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
            <Link to="/checkout/information">
              <button type="button">Continuar pedido</button>
            </Link>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Checkout;
