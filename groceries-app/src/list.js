import React from "react";


//this is the family member 1 grocery list component
export default class List extends React.Component {
    render() {
      return (
        <div className = "list">
        <h3>{this.fname = "Patrick"}</h3>
        <li>{this.item = "Tofu"}</li>
        <li>{this.item = "Swiss Chard"}</li>
        <li>{this.item = "Peanut Butter"}</li>
        <li>{this.item = "Seltzer Water"}</li>
        {/* <li>{this.item = {document.getElementById("ItemInput")}</li> */}
        </div>
      );
    }
  } //end ListOne component
  

















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