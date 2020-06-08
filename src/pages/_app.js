import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "../style/global.css";

function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Motivators</title>
        <meta name="description" content="Discover what motivates your teammates" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

CustomApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default CustomApp;
