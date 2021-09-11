/**********************************************************************************************
 * Patrick D. Faerber, Per Scholas Software Engineering Cohort 13
 * Module 2, Week 1 - Lab: Jeopardy
 * 
 **********************************************************************************************
 * 1. Make a button labeled "Random Trivia Question" or "Get Question" or something descriptive.
 * 2. On click, have this button that will make a GET request (using fetch) to get random trivia data. 
 *    Let's start you off with a win by giving you the URL: http://jservice.io/api/random
 * 3. Make some html elements like a div where you will display the question, category and points. 
 *    NOTE: You will need to look at the data that is returned to you and think back about how to 
 *    access data from different datatypes (is it an array within an object? How do you access the info?).
 * 4. Make another div in your HTML where you display the answer
 * 5. Add an on click, that has a function that will toggle whether or not you can see the answer.
 * 6. Add other elements to your page to make it make sense and look good (see attached image)
 * 7. Make a div that has an h2 and two buttons
 * 8. Inside the h2 keep score, start at 0
 * 9. Make one button add the points to the score and the other to subtract points from the score 
 *    (just add or subtract 1 point - using the points value from jService is Hungry for More)
 * 10. Add a little style and color to your app
 * 
 ************************************************************************************************/



import { useState, setInfo } from "react";
import React from "react";
import "./App.css";

function App() {
  //initialize the state in functional component
  const data = "";
  const [info, setInfo] = useState(data);

  function triviaFetch() {
    fetch("http://jservice.io/api/random")
      .then((data) => data.json())
      .then((response) => {
        let question = response.map((element) => element.question);
        let answer = response.map((element) => element.answer);
        let points = response.map((element) => element.value);

        console.log("success", answer);
        console.log("Success:", question);
        console.log("Success", points);
      });
  } //end triviaFetch

  if (data) {
    console.log(data);
  }

  return (
    <div className="App">
      <button id="randomButton" onClick={() => triviaFetch()}>
        Random Trivia Answer
      </button>

      {/* display answer container */}
      <div className="display">
        <h3>Answer:</h3>
        {data && <div> answer: {info.answer}</div>}
      </div>
      {/* display question container */}
      <div className="display">
        <h3>Question:</h3>
        {data && <div> question: {this.question}</div>}
      </div>
      {/* display points container */}
      <div className="display">
        <h3>Points:</h3>
        {info && <div> points: {this.value}</div>}
      </div>
    </div>
  );
}

export default App;
