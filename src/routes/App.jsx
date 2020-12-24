import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import AppContext from "../context/AppContext";
import Layout from "../components/Layout";
import Home from "../container/Home";
import Checkout from "../container/Checkout";
import NotFound from "../container/NotFound";
import useInitialState from "../hooks/useInitialState";
import "../styles/routes/App.css";

const App = () => {
  const [theme, updateTheme] = useState("bg_dark");
  const initialState = useInitialState();
  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <div className={"App " + theme}>
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/checkout" component={Checkout} />
                <Route component={NotFound} />
              </Switch>
            </Layout>
          </div>
        </BrowserRouter>
      </AppContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
