import React from "react";
import "./aboutInstructor.css";
import img from "../../assets/gopal_das.jpg";
import { SiFacebook } from "react-icons/si";
import { FaSquareXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

function AboutInstructor() {
  return (
    <div className="about_instructor">
      <h2>About the Instructor</h2>
      <div className="container">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam. eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div className="social_link_box">
            <div>
              <SiFacebook />
              <p>Facebook</p>
            </div>
            <div>
              <FaSquareXTwitter />
              <p>Twiter</p>
            </div>
          </div>
        </div>
        <div>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>
          <div className="social_link_box">
            <div>
              <FaYoutube />
              <p>Youtube</p>
            </div>
            <div>
              <FaInstagram />
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutInstructor;
