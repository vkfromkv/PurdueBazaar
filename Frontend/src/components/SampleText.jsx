import React, { useState } from "react";
//As you are working on the file, You can choose to ignore this file.
const SampleText = () => {
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
    <>
      <div className="container text-center my-5">
        <button
          type="button"
          className="btn btn-primary my-5"
          onClick={() => handleButtonClick()}
        >
          Click Here
        </button>
        <br />
        <h1>{text}</h1>
      </div>
    </>
  );
};

export default SampleText;
