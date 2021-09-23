import React from "react";
import reactDom from "react-dom";
import { useState, setInfo } from "react";

function ProdApi() {
    const [prodData, setInfo] = useState([]);

  function getProdApi() {
    fetch("/api/v1/products/name")
      .then((data) => data.json())
      .then((response) => {
        setInfo(response)
        console.log("Success", response);
      });
  } //end triviaFetch

 
  return (
    <div className="App">
      <button id="prodApi" onClick={() => getProdApi()}>
        Check out our Product Menu
      </button>

      {/* display Hot Drink list container */}
      <div className="display__prodData-list">
        <h3>Title</h3>
        <div>
         {/* <p>  {prodData[0].title}</p> */}
       {prodData.map(drink => <div key={drink.title}>
         {drink.title}
       </div>)}   
        </div>
        
      </div>
      {/* display question container */}
      <div className="display">
        <h3>Description</h3>
        {prodData.map(drink => <div key={drink.description}>
         {drink.description}
       </div>)}   
      </div>
      {/* display points container */}
      <div className="display">
        <h3>Ingredients</h3>
        {prodData.map(drink => <div key={drink.ingredients}>
         {drink.ingredients}
       </div>)}   
      </div>
    </div>
  );
}
export default ProdApi;
