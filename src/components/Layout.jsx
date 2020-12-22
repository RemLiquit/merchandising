import React from "react";
import DarkMode from "./DarkMode";
import Footer from "./Footer";
import Header from "./Header";
import "../styles/components/Layout.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <DarkMode />
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
