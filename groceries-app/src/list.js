/************************************************************************
 * This grocery cart list component adds/removes items prior to
 * final purchase.
 *
 * **********************************************************************/

import React, {Component} from "react";
import AddRemoveItem from "./AddRemoveItem";

export default function List(props) {
  console.log(props);
  return (
    <div className="list">
      {/* <h3>{props.fname + "'s Shopping Cart"}</h3> */}
      {""}
      <AddRemoveItem>
        {props.groceries.map((grocery, idx) => (
          <li key={idx}>
            Item:{" " + grocery.item + " "}
            Quantity:{" " + grocery.quantity + " "}
            Units:{grocery.units + " "}
          </li>
        ))}
      </AddRemoveItem>
    </div>
  );
}
//end List Component

// export default function () {
//     const items = ["First Item", "Second Item", "Third Item"];

//     return <List>
//         <Header>Name</Header>
//         {
//             items.map((item, index) => (
//                 <Item key={`item-${index}`}>{item}</Item>
//             ))
//         }
//     </List>
// }
