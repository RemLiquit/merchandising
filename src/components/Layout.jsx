import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../styles/components/Layout.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
