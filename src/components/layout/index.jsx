import React from "react";

//components
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <main className="container"> {children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
