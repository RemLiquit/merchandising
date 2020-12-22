import React, { useEffect, useState, useMemo, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/components/App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredUser = useMemo(() =>
    data.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    })
  );

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((res) => setData(res.results));
  });

  return (
    <div>
      <input
        className="search_input"
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search"
      />
      <div className="main_datas">
        {filteredUser.map((datas) => (
          <div className="container">
            <div className="title">{datas.name}</div>
            <div className="message">{datas.location.url}</div>
            <button className="button">Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
