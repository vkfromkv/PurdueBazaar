import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SampleText from "../components/SampleText";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Products from "./Products";
const Home = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <div className="d-flex justify-content-center vh-100">
        <div
          style={{ maxWidth: "1000px", opacity: "1" }}
          className="text-left p-3 m-0"
        >
          <Navbar />
          {pathname === "/about" && <About />}
          {pathname === "/products" && <Products />}
          <div className="content-container">
            <Sidebar />
            <main className="main-content">
              {pathname === "/" && <SampleText />}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
