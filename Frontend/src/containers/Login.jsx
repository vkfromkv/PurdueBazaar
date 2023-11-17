import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/auth.jsx";

import "bootstrap/dist/css/bootstrap.css";
import ShowPassword from "../components/ShowPassword.jsx";

const Login = ({ login, isAuthenticated }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [visible, setVisible] = useState(false);

  const { email, password } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container vh-100 vw-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11" style={{ width: "40%" }}>
          <div className="card text-black" style={{ borderRadius: "25px" }}>
            <div className="card-body p-md-5">
              <ul
                className="nav nav-pills nav-justified mb-3"
                id="ex1"
                role="tablist"
              >
                <li
                  style={{ marginRight: "5px" }}
                  className="nav-item"
                  role="presentation"
                >
                  <a
                    className="nav-link active"
                    id="tab-login"
                    href="login"
                    role="tab"
                    aria-controls="pills-login"
                    aria-selected="true"
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="btn btn-light btn-outline-primary w-100 h-100"
                    id="tab-register"
                    href="signup"
                    role="tab"
                    aria-controls="pills-register"
                    aria-selected="false"
                  >
                    Register
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="pills-login"
                  role="tabpanel"
                  aria-labelledby="tab-login"
                >
                  <form onSubmit={onSubmit}>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        name="email"
                        value={email}
                        id="loginName"
                        className="form-control"
                        onChange={onChange}
                        required
                      />
                      <label className="form-label" htmlFor="loginName">
                        Email or username
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type={visible === false ? "password" : "text"}
                        name="password"
                        value={password}
                        id="loginPassword"
                        className="form-control"
                        onChange={onChange}
                        required
                      />
                      <label className="form-label" htmlFor="loginPassword">
                        Password
                      </label>
                    </div>

                    <div className="row mb-4">
                      <div className="col-md-6 d-flex justify-content-center">
                        <ShowPassword setVisible={setVisible} />
                      </div>

                      <div className="col-md-6 d-flex justify-content-center">
                        <a href="/reset-password">Forgot password?</a>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4 w-100"
                    >
                      Sign in
                    </button>

                    <div className="text-center">
                      <p>
                        Not a member? <a href="signup">Register</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
