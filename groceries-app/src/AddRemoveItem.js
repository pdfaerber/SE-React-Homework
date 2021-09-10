import React from "react";

/************************************************************************************
 * class AddRemoveItem
 * This component takes form input from the user and adds or removes an item from a
 * list.
 *
 ***********************************************************************************/

export default class AddRemoveItem extends React.Component {
  state = {
    item: "",
    units: "",
    quantity: "",
    isPurchased: false,
  };

  //groceries array data received from form id = "input_form"

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }; //handleChange

  render() {
    return (
      <div className="button">
        <form id="input_form" onSubmit={this.handleSubmit}>
          <br />

          <input
            type="text"
            id="item"
            placeholder="Enter your grocery item"
            onChange={this.handleChange}
            value={this.state.item}
          />
          <br />
          <label for="NumInput">Select Item Quantity</label>
          <br />
          <input
            type="number"
            id="quantity"
            onChange={this.handleChange}
            value={this.state.quantity}
            placeholder="Select Item Quantity"
          />
          <br />
          <label for="units">Select Unit Type</label>
          <br />
          <select
            id="units"
            name="units"
            onChange={this.handleChange}
            value={this.state.units}
          >
            <option value="12-pack">12-pack</option>
            <option value="pound">LB</option>
            <option value="2-liter">2-Liter</option>
            <option value="bushel">Bushel</option>
            <option value="peck">Peck</option>
          </select>
          <br />
          <label for="AddItem">Add Item</label>
          <br />
          <button type="submit" id="AddItem" value="Submit">
            Add Item
          </button>
          <br />
        </form>
      </div>
    );
  }
}

/* Additional Form Elements **************************************************
  <label for="RemoveItem">Remove Item</label>
  <br />
  <button id="RemoveItem" onClick= "alert('Item removed')">Remove Item</button>
  <br />
  
  <label for="SortBy">Sort list Ascending:</label>
  <br />
  <input type="filter" id="SortBy" placeholder="Sort A-Z" />
  
  <label for="Checkbox">Check if Organic Preferred</label>
  <br />
  <input type="checkbox" id="checkbox" placeholder="Organic?" />
  <br />
  *******************************************************************************/
