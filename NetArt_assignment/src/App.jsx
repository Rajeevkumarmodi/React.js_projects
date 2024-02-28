import React from "react";
import "./App.css";
import logo from "./assets/logo.png";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import phoneIcon from "./assets/phone_icon.png";
import facebookIcon from "./assets/facebook_icon.png";
import wwwIcon from "./assets/www_icon.png";

function App() {
  return (
    <div className="homePage">
      <nav>
        <img src={logo} alt="logo" />
      </nav>
      <main className="mainSection">
        <section className="leftManiSection">
          <img src={img1} alt="first image" />
        </section>
        <section className="rightManiSection">
          <p>
            <b>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </b>
          </p>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img src={img2} alt="second image" />
          <p className="mainBottomText">
            Government of India has awarded the{" "}
            <b> "National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
            Joint Managing Director of C.R.I. Group received the award from Smt.
            Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
            Honorable Minister of State.
          </p>
        </section>
      </main>
      <section className="toolsSection">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img src={img3} alt="tools images" />
        <p className="toolsName">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors{" "}
        </p>
      </section>

      <section className="bottomSection">
        <p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
        <p>
          CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS
          & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD &
          BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING
          AGRICULTURE & RESIDENTIAL
        </p>
      </section>

      <footer>
        <div>
          <img src={phoneIcon} alt="phone icon" />
          <p>Toll free 1800 200 1234</p>
        </div>
        <a href="www.facebook.com/cripumps">
          <img src={facebookIcon} alt="facebook icon" />
          <p>www.facebook.com/cripumps</p>
        </a>
        <a href="www.crigroups.com">
          <img src={wwwIcon} alt="www icon" />
          <p>www.crigroups.com</p>
        </a>
      </footer>
    </div>
  );
}

export default App;
