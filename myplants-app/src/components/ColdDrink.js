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
         {/* <p>  {ColdDrink[0].title}</p> */}
       {coldDrink.map(drink => <div key={drink.title}>
         {drink.title}
       </div>)}   
        </div>
        
      </div>
      {/* display question container */}
      <div className="display">
        <h3>Description</h3>
        {coldDrink.map(drink => <div key={drink.description}>
         {drink.description}
       </div>)}   
      </div>
      {/* display points container */}
      <div className="display">
        <h3>Ingredients</h3>
        {coldDrink.map(drink => <div key={drink.ingredients}>
         {drink.ingredients}
       </div>)}   
      </div>
    </div>
  );
}
export default ColdDrink;