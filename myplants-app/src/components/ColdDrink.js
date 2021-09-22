import React from "react";
import reactDom from "react-dom";
import { useState, setInfo } from "react";

function ColdDrink() {
  const data = "";
  const [coldDrink] = useState(data);

  function getColdDrink() {
    fetch("https://api.sampleapis.com/coffee/iced")
      .then((data) => data.json())
      .then((response) => {
        console.log("Success", response);
      });
  } //end

  if (data) {
    console.log(data);
  }

  return (
    <div className="App">
      <button id="button__coldDrink" onClick={() => getColdDrink()}>
        Check out the Cold Drink List
      </button>

      {/* display answer container */}
      <div className="display">
        <h3>Title</h3>
        {data && <div> answer: {coldDrink.title}</div>}
      </div>
      {/* display question container */}
      <div className="display">
        <h3>Description</h3>
        {data && <div> question: {coldDrink.description}</div>}
      </div>
      {/* display points container */}
      <div className="display">
        <h3>Ingredients</h3>
        {data && <div> points: {coldDrink.ingredients}</div>}
      </div>
    </div>
  );
}
export default ColdDrink;
