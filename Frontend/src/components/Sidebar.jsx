import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

function Sidebar() {
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  function handleClick() {
    // Set the state to trigger the redirect
    setRedirectToLogin(true);
  }

  // Check if redirect is needed
  if (redirectToLogin) {
    // Redirect to "/login" route
    return <Redirect to="/login" />;
  }

  return (
    <>
      <nav
        style={{ width: "9rem" }}
        className="col-md-3 col-lg-2 d-md-block bg-light position-fixed top-0 start-0 bottom-0 w-2 z-1 overflow-auto py-3 px-4"
      >
        <div className="position-sticky">
          <>
            <Link to="/" className="mt-0 text-decoration-none text-reset">
              <p className="top-element-text badge bg-primary text-wrap">Purdue Bazaar</p>
            </Link>
            <ul className="nav flex-column" style={{ marginTop: "20px" }}>
              <li className="nav-item">
                <button
                  className="btn btn-primary w-100"
                  type="submit"
                  onClick={handleClick}
                >
                  Sign In
                </button>
              </li>
              <li className="nav-item">
                <div className="spacer"></div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Forums
                </a>
              </li>
            </ul>
          </>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
