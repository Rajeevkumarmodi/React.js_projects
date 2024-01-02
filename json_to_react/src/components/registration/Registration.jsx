import React from "react";
import "./registration.css";
import { MdOutlineCurrencyRupee, MdOndemandVideo } from "react-icons/md";
import { FaRegComments, FaIndianRupeeSign } from "react-icons/fa6";

function Registration() {
  return (
    <div className="registration">
      <h3>Course fees</h3>
      <h2 className="fee">
        <FaIndianRupeeSign />
        <h2>5,000</h2>
      </h2>
      <h3>What`s included:</h3>
      <div>
        <MdOndemandVideo />
        <p>5 on-demand videos</p>
      </div>
      <div>
        <MdOndemandVideo />
        <p>2 livestream sessions</p>
      </div>
      <div>
        <FaRegComments />
        <p>Live D&A session with Nityanand Charan Das</p>
      </div>
      <div>
        <FaRegComments />
        <p>An active whatsapp community</p>
      </div>
      <button>Registration today</button>
    </div>
  );
}

export default Registration;
