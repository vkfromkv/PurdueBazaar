/**
 * Entry point for the React application, rendering the main App component.
 * @module index
 */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/**
 * Renders the App component within React.StrictMode, enhancing debugging and detecting common mistakes.
 * @function
 * @param {JSX.Element} component - The root React component to be rendered.
 * @param {Element} container - The HTML element where the React component should be rendered.
 * @returns {void}
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
