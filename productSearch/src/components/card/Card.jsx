import React from "react";
import "./card.css";

function Card({ title, price, img }) {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <div className="card_details">
        <p>{title.length > 15 ? `${title.slice(0, 15)}...` : title}</p>
        <p>${price}</p>
      </div>

      <button>Bye now</button>
    </div>
  );
}

export default Card;
