import React from "react";
import "../styles/components/Products.css";

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title} />
      <div className="Products-item-info">
        <h2>
          {product.title}
          <span>${product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <div className="Products-select">
        <div className="Products-select-size">
          <select id={product.id} onSelect={handleAddToCart(product)}>
            <option>small</option>
            <option>medium</option>
            <option>large</option>
            <option>extra</option>
          </select>
        </div>
        <div className="Products-select-number">
          <input
            type="number"
            defaultValue="1"
            onChange={handleAddToCart(product)}
          />
        </div>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>
        Comprar
      </button>
    </div>
  );
};

export default Product;
