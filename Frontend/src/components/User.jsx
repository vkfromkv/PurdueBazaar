import React, { useContext } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AuthContext from "./UserContext";

function User(props) {
  const ctx = useContext(AuthContext);

  const closeModal = () => {
    props.closeModal(false);
  };

  return (
    <div
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)',}}
      className="h-100 w-100 d-flex p-3 gap-3 position-fixed top-0 start-0 justify-content-center align-items-center z-1 overflow-hidden bg-300"
    >
      <div
        style={{ width: "400px", height: "420px" }}
        className="d-flex bg-white flex-column p-3 gap-1"
      >
        <div className="d-flex justify-content-end">
          <button onClick={closeModal} type="button" className="btn btn-light">
            &times;
          </button>
        </div>
        <div className="d-flex flex-column h-100 p-2">{ctx.hasAccount ? <SignIn /> : <SignUp />}</div>
      </div>
    </div>
  );
}

export default User;
