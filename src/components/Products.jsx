import React, { useContext, useState, useMemo } from "react";
import Product from "./Product";
import AppContext from "../context/AppContext";
import "../styles/components/Products.css";

const Products = () => {
  const [search, setSearch] = useState("");
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  const filteredUser = useMemo(() =>
    products.filter((user) => {
      return user.title.toLowerCase().includes(search.toLowerCase());
    })
  );

  return (
    <div>
      <input
        className="search_input"
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search"
      />
      <div className="Products-items">
        {filteredUser.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
