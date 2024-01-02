import React from "react";
import "./hero.css";
import img1 from "../../assets/hero_section_image.jpg";

function Hero({ name, title }) {
  return (
    <div className="hero_section">
      <div>
        <p className="neme">{name}</p>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Hero;
