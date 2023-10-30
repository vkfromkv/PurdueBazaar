import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
