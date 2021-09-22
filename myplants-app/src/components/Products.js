import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { GiCoffeeBeans, GiTeapotLeaves, GiCoffeePot } from "react-icons/gi";
import { SiGitea } from "react-icons/si";
import { IconContext } from "react-icons/lib";
import "./Products.css";

function Products() {
  return (
    <IconContext.Provider value={{ color: "#290001", size: 64 }}>
      <div className="product__section">
        <div className="product__wrapper">
          <h1 className="product__heading">Products</h1>
          <div className="product__container">
            <Link to="/sign-up" className="product__container-prod">
              <div className="product__container-prodInfo">
                <div className="icon">
                  <GiCoffeeBeans />
                </div>
                <ul className="product__container-features">
                  <h3>Coffees</h3>
                  <li>item </li>
                  <li>description </li>
                  <li>price </li>
                </ul>
                <Button buttonSize="button--wide" buttonColor="primary">
                  Add to cart
                </Button>
              </div>
            </Link>
            <Link to="/sign-up" className="product__container-prod">
              <div className="product__container-prodInfo">
                <div className="icon">
                  <SiGitea />
                </div>
                <ul className="product__container-features">
                  <h3>Teas</h3>
                  <li>item: </li>
                  <li>description: </li>
                  <li>price: </li>
                </ul>
                <Button buttonSize="button--wide" buttonColor="primary">
                  Add to cart
                </Button>
              </div>
            </Link>
            <Link to="/sign-up" className="product__container-prod">
              <div className="product__container-prodInfo">
                <div className="icon">
                  <GiTeapotLeaves />
                  <GiCoffeePot />
                </div>
                <ul className="product__container-features">
                  <h3>Brewing Accessories</h3>
                  <li>item: </li>
                  <li>description: </li>
                  <li>price: </li>
                </ul>
                <div className="icon"></div>
                <Button buttonSize="button--wide" buttonColor="primary">
                  Add to cart
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Products;
