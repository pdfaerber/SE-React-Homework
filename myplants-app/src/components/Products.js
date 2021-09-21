import React from "react";
import { FaFire } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Products() {
  return (
    <div className="product__section">
      <div className="product__wrapper">
        <h1 className="product__heading">Products</h1>
        <div className="product__container">
          <Link to="/sign-up" className="product__container-prod">
            <div className="product__container-prodInfo">
              <div className="icon">
                  <FaFire/>
              </div>
              <h3>Starter</h3>
              <h4></h4>

            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Products;
