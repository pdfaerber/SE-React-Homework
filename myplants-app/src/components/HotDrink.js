import React from "react";
import reactDom from "react-dom";
import { useState, setInfo } from "react";

function HotDrink() {
  const data = "";
  const [hotDrink, setInfo] = useState(data);

  function getHotDrink() {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((data) => data.json())
      .then((response) => {
        console.log("Success", response);
      });
  } //end triviaFetch

  if (data) {
    console.log(data);
  }

  return (
    <div className="App">
      <button id="randomButton" onClick={() => getHotDrink()}>
        Check out the Hot Drink List
      </button>

      {/* display answer container */}
      <div className="display">
        <h3>Title</h3>
        {data && <div> answer: {hotDrink.title}</div>}
      </div>
      {/* display question container */}
      <div className="display">
        <h3>Description</h3>
        {data && <div> question: {hotDrink.description}</div>}
      </div>
      {/* display points container */}
      <div className="display">
        <h3>Ingredients</h3>
        {data && <div> points: {hotDrink.ingredients}</div>}
      </div>
    </div>
  );
}
export default HotDrink;
