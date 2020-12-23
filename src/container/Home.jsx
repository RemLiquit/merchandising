import React from "react";
import App from "../components/App";
import Products from "../components/Products";
import initialState from "../initialState";

const Home = () => {
  return <Products products={initialState.products} />;
  // return <App />;
};

export default Home;
