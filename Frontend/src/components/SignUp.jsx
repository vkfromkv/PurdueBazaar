import React, { useContext, useState } from "react";
import validator from "validator";
import AuthContext from "./UserContext";
import ShowPassword from "./ShowPassword";

const SignUp = () => {
  const ctx = useContext(AuthContext);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    if (validator.isEmail(newEmail) == true) {
      if (newPassword.trim().length < 8 || confirmPassword.trim().length < 8) {
        setError("Use 8 characters or more for your password");
      } else {
        if (newPassword === confirmPassword) {
          setError("");
          // add email and password of a new user in database //
        } else {
          setError("those passwords didn't match.Try again.");
        }
      }
    } else {
      setError("Please enter a valid email address");
    }
  };

  return (
    <div className="d-flex flex-column gap-3 p-4">
      <form className="d-flex flex-column" onSubmit={submitHandler}>
        <input
          placeholder="Email"
          type="text"
          onChange={(event) => {
            setNewEmail(event.target.value);
          }}
          style={{ marginBottom: "10px" }}
        ></input>
        <input
          placeholder="Password"
          type={visible === false ? "password" : "text"}
          onChange={(event) => {
            setNewPassword(event.target.value);
          }}
          style={{ marginBottom: "10px" }}
        ></input>
        <input
          placeholder="Confirm Password"
          type={visible === false ? "password" : "text"}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        ></input>
        <p className="text-danger small mb-3">{error}</p>
        <ShowPassword />
        <button
          type="submit"
          disabled={
            newEmail.trim() === "" ||
            newPassword.trim() === "" ||
            confirmPassword.trim() === ""
          }
          className="btn btn-primary font-weight-bold rounded p-2 "
        >
          Sign Up
        </button>
      </form>
      <div style={{ textAlign: "center" }}>
        <label>Already have an account?</label>
        <button
          className="btn btn-link text-primary m-2 w-50"
          onClick={() => {
            ctx.setDoesnot(true);
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};
export default SignUp;
