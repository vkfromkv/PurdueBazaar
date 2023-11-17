import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
// Navigation bar related functionality
const Navbar = ({ logout, isAuthenticated }) => {
  const [redirect, setRedirect] = useState(false);

  const logout_user = () => {
    logout();
    setRedirect(true);
  };

  const guestLinks = () => (
    <Fragment>
      <li className="nav-item">
        <a className="nav-link" href="/about">
          About Us
        </a>
      </li>
    </Fragment>
  );

  const authLinks = () => (
    <Fragment>
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
        <a className="nav-link" href="/" onClick={logout_user}>
          Logout
        </a>
      </li>
    </Fragment>
  );

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {isAuthenticated ? authLinks() : guestLinks()}
          </ul>
        </div>
      </nav>
      {redirect ? <Redirect to="/" /> : <Fragment></Fragment>}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
