import React from "react";

function ShowPassword({ setVisible }) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        onChange={(event) => {
          setVisible(event.target.checked);
        }}
      ></input>
      <label className="form-check-label pb-2">Show password</label>
    </div>
  );
}
export default ShowPassword;
