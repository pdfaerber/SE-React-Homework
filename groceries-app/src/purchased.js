import react from "react";

export default function Purchased(props) {
    console.log(props);
    return (
    <div className="list">
      <h3>{props.fname + "'s Final Purchase"}</h3>
      
    </div>
  );

}
