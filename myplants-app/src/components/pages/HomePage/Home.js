import React from "react";
import reactDom from "react-dom";
import DrinkMenu from "../../DrinkMenu";
import HeroSection from "../../HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function Home() {
  return (
    <React.Fragment>
        <DrinkMenu/>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjFour} />
    </React.Fragment>
  );
}

export default Home;
