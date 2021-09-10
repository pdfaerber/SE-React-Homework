/**************************************************************************************************************
 * Patrick D. Faerber, Per Scholas Software Engineering Cohort 13, September 6, 2021
 * Week 1 - Homework 2: Groceries
 *
 * Build a grocery app that allows the users to make a grocery list
 *
 * Technical Requirements:
 * 1. Make an array of 3 objects using the above shape and render the item,
 *    quantity and units (12 pack, 1lb, 2 liters, etc.)
 * 2. Make inputs so that new items can be added
 * 3. Conditionally render the grocery items based on whether or not they were purchased
 *    (ok to have hard coded values for isPurchased)
 * 4. Add some style to your app
 *
 * Hungry For More:
 * 1. Make multiple grocery lists (one for each family member) and have them update independently.
 * 2. Add a button that says 'remove' and when clicked the value of isPurchased is toggled.
 * 3. Sort your list alphabetically.
 * 4. Create other ways to sort your data (ie by quantity).
 * 5. Change the 'remove' button's functionality to actually remove the item from the list.
 * 6. Add a 'later' button that toggles the css (gray text, strikeout etc.) if the item should be purchased later.
 * 7. Expand your app to allow for images (the images should be an http url )
 *    and then render the image in your app - some images may take longer to load and not appear.
 *    correctly, look into react life cycle events and/or lazy loading (if that is too much just keep trying images,
 *    some will work and save lifecycles/lazy loading for later).
 *
 *****************************************************************************************************************/

import React, {Component} from "react";
import List from "./list";
import Purchased from "./purchased";
import AddRemoveItem from "./AddRemoveItem";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        { item: "", units: "", quantity: 0, isPurchased: false },
        { item: "Bananas", units: "bushel", quantity: 1, isPurchased: false },
        {
          item: "Strawberries",
          units: "bushel",
          quantity: 1,
          isPurchased: false,
        },
      ],
      purchased: [],
    };
  }

  //create a function in App
  handleSubmit = (grocery) => {
  this.state.groceries.concat([grocery])
      
    };//handleSubmit

  render() {
    return (
      <div className="App">
        <AddRemoveItem addItem = {this.handleSubmit}/>
        <List grocery = {this.state.groceries} />
        <Purchased />
      </div>
    );
  }
}
export default App;
