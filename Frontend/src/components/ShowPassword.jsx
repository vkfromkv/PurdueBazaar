import React from "react";

function ShowPassword() {
  return (
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        onChange={(event) => {
          setVisible(event.target.checked);
        }}
      ></input>
      <label class="form-check-label pb-2">Show password</label>
    </div>
  );
}
export default ShowPassword;
