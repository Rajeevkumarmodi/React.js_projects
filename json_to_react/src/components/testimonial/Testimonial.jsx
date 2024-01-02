import React from "react";
import "./testimonial.css";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

function Testimonial({ text, reviewer_designation, reviewer_name }) {
  return (
    <div className="testimonial">
      <div>
        <h3>"{text} "</h3>
        <div className="all_arrow">
          <p className="rightArrow">
            <IoIosArrowDropright className="arrow" />
          </p>
          <p className="leftArrow">
            <IoIosArrowDropleft className="arrow" />
          </p>
        </div>
        <div className="user">
          <RxAvatar className="avatar" />
          <div>
            <p>{reviewer_name}</p>
            <p> {reviewer_designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
