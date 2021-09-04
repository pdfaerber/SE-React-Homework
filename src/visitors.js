import React from 'react'

export function Visitors(props) {
  return( 
    <div class ="grid-item" >
        <p>Website Visitors</p>
        {props.num}
        </div>
  );
} //close function Visitors 

export function VisitorsImg(props) {
    return( 
      <div class ="img_box" >
          <p>Data Visualization</p> 
          {props.num}</div>
    );
  } //close function VisitorsImg 