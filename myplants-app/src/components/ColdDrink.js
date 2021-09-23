import React from "react";
import reactDom from "react-dom";
import { useState, setInfo } from "react";

function ColdDrink() {
  
  const [coldDrink, setInfo] = useState([]);

  function getColdDrink() {
    fetch("https://api.sampleapis.com/coffee/iced")
      .then((data) => data.json())
      .then((response) => {
        setInfo(response)
        console.log("Success", response);
      });
  } //end


  return (
    
    <div className="App">
      <button id="randomButton" onClick={() => getColdDrink()}>
        Check out the Cold Drink List
      </button>

      {/* display Cold Drink list container */}
      <div className="display__coldDrink-list">
        <h3>Title</h3>
        <div>
        {coldDrink.map((drink) => (
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
export default ColdDrink;