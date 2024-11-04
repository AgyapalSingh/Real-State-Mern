import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Layout = ({
  children,
  title = "AujlaEstate - ",
  description = "react, MERN, realstate",
  keywords = "mern,react,node,mongodb",
  author = "Agyapal Singh"
}) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main className="main-Menu">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
