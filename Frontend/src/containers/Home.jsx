import React from "react";
import { useLocation } from "react-router-dom";
import SampleText from "../components/SampleText";
const Home = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <div className="d-flex justify-content-center vh-100">
        <div
          style={{ maxWidth: "1000px", opacity: "1" }}
          className="text-left p-3 m-0"
        >
          <div className="content-container">
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
