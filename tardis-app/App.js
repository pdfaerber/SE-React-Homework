/**********************************************************************************
 * Patrick Faerber, Per Scholas, Software Engineering Cohort 13, September 3, 2021
 * Week 1 - Homework 3: T.A.R.D.I.S
 * Note: need to work on fixing/adding the toggling functionality from upper 
 * to lower case between instances of DivThree within the DivTwo Component 
 ***********************************************************************************/


import React from "react";
import "./App.css";

class DivThree extends React.Component {
  state = {
    tardis: {
      name: "Time and Relative Dimension in Space",
      caps: false,
    },
  };
  /* 
  Add a function that gets called on click and changes the text.
  On click, the text will change from caps to lower case and change the caps property.
*/
  changeIt = (text) => {
    if (this.state.tardis.caps) {
      console.log("Hello... Is it me you're looking for?");
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false,
        },
      });
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true,
        },
      });
    }
  };

  /*
  Render a div, and inside the div add an <h3> that will 
  render the name property from this.state
  */

  render() {
    return (
      <div>
        <h3 onClick={() => this.changeIt(this.state.tardis.name)}>
          {this.state.tardis.name}
        </h3>
        Hello... Is it me you're looking for?
      </div>
    );
  }
}//end DivThree Class

class DivTwo extends React.Component {
  render() {
    return (
      <div>
        <DivThree />
        <DivThree />
      </div>
    );
  }
}

class DivOne extends React.Component {
  render() {
    return (
      <div>
        <DivTwo />
      </div>
    );
  }
}
//Is this the bottom most 
class App extends React.Component {
  render() {
    return (
      <div>
        <DivOne />
      </div>
    );
  }
}

export default App;
