import React from "react";
import reactDom from "react-dom";
import HeroSection from "../../HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Products from "../../Products";
import DrinkMenu from "../../DrinkMenu";
import ProdApi from "../../ProdApi";
function Home() {
  return (
    <React.Fragment>
      <HeroSection {...homeObjOne} />
      <DrinkMenu/>
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Products/>
      <ProdApi/>
      <HeroSection {...homeObjFour} />
    </React.Fragment>
  );
}

export default Home;
