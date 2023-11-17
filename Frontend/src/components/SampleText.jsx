import React, { useState } from "react";
import { connect } from "react-redux";

const SampleText = ({isAuthenticated}) => {
  const sampleTexts = [
    "Hey There! Welcome to Purdue Bazaar!",
    "Hello, You must be a Mastodon!",
    "Hi, What brings you to Purdue Bazaar Today?",
    "Hola! Ready to explore your Mastodon Market!",
  ];

  const [text, setText] = useState(sampleTexts[0]);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const handleButtonClick = () => {
    setText(sampleTexts[getRandomInt(sampleTexts.length)]);
  };

  return (
    <div className="container text-center my-5 h-100">
      <button
        type="button"
        className="btn btn-primary my-5"
        onClick={() => handleButtonClick()}
      >
        Click Here
      </button>
      <br />
      <h1>{text}</h1>
      <br/><br/><br/>
      {isAuthenticated ? <></> : <h3>Please <b>Sign in</b> to view Products</h3>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(SampleText);
