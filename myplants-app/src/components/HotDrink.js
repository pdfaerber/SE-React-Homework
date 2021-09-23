import React from "react";
import reactDom from "react-dom";
import { useState, setInfo } from "react";

function HotDrink() {
  const [hotDrink, setInfo] = useState([]);

  function getHotDrink() {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((data) => data.json())
      .then((response) => {
        setInfo(response);
        console.log("Success", response);
      });
  } //end triviaFetch

  return (
    <div className="App">
       <h3>Hot Coffee Drinks</h3>
      <button id="randomButton" onClick={() => getHotDrink()}>
        Check out the Hot Drink List
      </button>
<br/>
      {/* display Hot Drink list container */}
      <div className="display__hotdrink-list">
       
        <div>
          {/* <p>  {hotDrink[0].title}</p> */}
          {hotDrink.map((drink) => (
            <div key={drink.title}>
              <br />
              Title: {drink.title}
              <br />
              Description: {drink.description}
              <br />
              Ingredients: {drink.ingredients}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default HotDrink;
