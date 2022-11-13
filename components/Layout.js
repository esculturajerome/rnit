import React from "react";
import Footer from "./Footer";
import Goals from "./Goals";
import ImageRow from "./ImageRow";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="px-4 py-6 md:py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mb-16">
        {children}
      </div>
      <ImageRow>
        <Goals />
      </ImageRow>
      <Footer />
    </>
  );
};

export default Layout;
