import React from "react";
import "./productCard.css";

function ProductCard() {
  return (
    <div className="card">
      <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" alt="" />
      <div className="content">
        <h3>I phone 9</h3>
        <div>
          <p>$400</p>
          <p>
            <del>$600</del>
          </p>
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
