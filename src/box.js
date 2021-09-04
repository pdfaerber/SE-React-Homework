import React from "react";

export function Box1(props) {
  return (
    <div class="upper-grid">
      <p>Reviews </p>
      {props.num}
    </div>
  );
} //close function Box

export function Box2(props) {
  return (
    <div class="upper-grid">
      <p>Average Rating </p> 
      {props.num}
    </div>
  );
}

export function Box3(props) {
  return (
    <div class="upper-grid">
      <p>Sentiment Analysis </p>
      
      <li>{props.num1}</li>
      <li>{props.num2}</li>
      <li>{props.num3}</li>
      
    </div>
  );
}
