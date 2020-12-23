import React, { useContext } from "react";
import Product from "./Product";
import AppContext from "../context/AppContext";
// import "../styles/components/Products.css";

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredUser = useMemo(() =>
    products.filter((user) => {
      return user.title.toLowerCase().includes(search.toLowerCase());
    })
  );

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <div className="Products">
      <input
        className="search_input"
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search"
      />
      <div className="Products-items">
        {products.map((product) => (
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
