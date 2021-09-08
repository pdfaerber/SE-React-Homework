import React from 'react';

/************************************************************************************
 * class AddRemoveItem
 * This component takes form input from the user and adds or removes an item from a
 * list.
 *  
 ***********************************************************************************/

export default class AddRemoveItem extends React.Component {
    render() {
      return (
        <div className="button">
          <form>
            <br />
          <label for="Checkbox">Check if Organic Preferred</label>
          <br />
          <input type="checkbox" id="checkbox" placeholder="Organic?" />
          <br />
          <input type="text" id="ItemInput" placeholder="Enter your grocery item" />
          <br />
          <label for="NumInput">Select Item Quantity</label>
          <br />
          <input type="number" id="NumInput" placeholder="Select Item Quantity" />
          <br />
          <label for="AddItem" >Add Item</label>
          <br />
          <button id="AddItem" onClick = "alert('Item added')">Add Item</button>
          <br />
          <label for="RemoveItem">Remove Item</label>
          <br />
          <button id="RemoveItem" onClick= "alert('Item removed')">Remove Item</button>
          <br />
          <label for="SortBy">Sort list Ascending:</label>
          <br />
          <input type="filter" id="SortBy" placeholder="Sort A-Z" />
          </form>
        </div>
        
      );
    }
  }
  
  