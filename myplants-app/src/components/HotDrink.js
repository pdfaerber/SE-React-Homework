import React from "react";
import reactDom from "react-dom";
import { useState, setInfo } from "react";

function HotDrink() {
    const [hotDrink, setInfo] = useState([]);

  function getHotDrink() {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((data) => data.json())
      .then((response) => {
        setInfo(response)
        console.log("Success", response);
      });
  } //end triviaFetch

 
  return (
    <div className="App">
      <button id="randomButton" onClick={() => getHotDrink()}>
        Check out the Hot Drink List
      </button>

      {/* display Hot Drink list container */}
      <div className="display__hotdrink-list">
        <h3>Title</h3>
        <div>
         {/* <p>  {hotDrink[0].title}</p> */}
       {hotDrink.map(drink => <div key={drink.title}>
         {drink.title}
       </div>)}   
        </div>
        
      </div>
      {/* display question container */}
      <div className="display">
        <h3>Description</h3>
        {hotDrink.map(drink => <div key={drink.description}>
         {drink.description}
       </div>)}   
      </div>
      {/* display points container */}
      <div className="display">
        <h3>Ingredients</h3>
        {hotDrink.map(drink => <div key={drink.ingredients}>
         {drink.ingredients}
       </div>)}   
      </div>
    </div>
  );
}
export default HotDrink;
