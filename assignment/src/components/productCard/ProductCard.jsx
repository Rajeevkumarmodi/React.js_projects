import React, { useContext } from "react";
import "./productCard.css";
import { myContex } from "../../App";

function ProductCard({ title, price, discountPercentage, thumbnail }) {
  const { cart, setCart } = useContext(myContex);
  function handelAddToCart() {
    setCart([...cart, { title, price, discountPercentage, thumbnail }]);
  }

  return (
    <div className="card">
      <img src={thumbnail} alt="" />
      <div className="content">
        <h3>{title}</h3>
        <p>${price}</p>
        <button onClick={handelAddToCart}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
