import React from "react";
import Products from "../components/Products";
import initialState from "../initialState";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Praxi-store Merch</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TU_USER" />
        <meta name="twitter:creator" content="@TU_USER" />
        <meta name="twitter:title" content="Praxi-Store Merch" />
        <meta name="twitter:description" content="Praxi-Store Merch" />
        <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:title" content="Praxi-Store Merch" />
        <meta property="og:description" content="Praxi-Store Merch" />
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:url" content="praxi-store.xyz" />
        <meta property="og:site_name" content="Praxi-Store Merch" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <Products products={initialState.products} />
    </React.Fragment>
  );
};

export default Home;
