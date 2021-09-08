/**************************************************************************************************************
 * Patrick D. Faerber, Per Scholas Software Engineering Cohort 13, September 6, 2021
 * Week 1 - Homework 2: Groceries
 *
 * Hungry For More
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

import React from "react";
import List from "./list";
import AddRemoveItem from "./AddRemoveItem";
import "./App.css";

function App() {
  state = {
    fname:'',  
    item: '',
    quantity: '',
    added: false
}

handleChange = event => {
  // computed property names
  this.setState({ [event.target.id]: event.target.value })
}




//   state = {
//     item: '',
//     units: '',
//     quantity: '',
// groceries:[
//   {
//     item: 'Apples',
//     units: 3,
//     quantity: 5,
//     isPurchased: false
//   }
//   ,

//   {
//     item: 'Grapes',
//     units: 2,
//     quantity: 5,
//     isPurchased: false
//   }
//     ,
//   {
//     item: 'Rice',
//     units: 1,
//     quantity: 1,
//     isPurchased: false
//   }
// ]
// }

  return (
    <div className="App">
      <h3>Patrick's Grocery Store</h3>
      <AddRemoveItem />
      <List />
     </div>
  );
}

export default App;
