import React from "react";
import "./courseExpect.css";
import { IoMdCheckmark } from "react-icons/io";

function CourseExpect() {
  return (
    <div className="expect">
      <h2>What to expect from the course</h2>
      <div className="points">
        <div>
          <IoMdCheckmark />
          <p>Lorem to manage your relationship</p>
        </div>
        <div>
          <IoMdCheckmark />
          <p>Better communication</p>
        </div>
        <div>
          <IoMdCheckmark />
          <p>Time management</p>
        </div>
        <div>
          <IoMdCheckmark />
          <p>Forgiveness</p>
        </div>
      </div>
      <h2>Key topics covered</h2>
      <div>
        <p>
          Temporibus autem quibusdam et aut officiis debitis aut rerum
          necessitatibus saepe eveniet ut et voluptates repudiandae sint et
          molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
          perferendis doloribus asperiores repellat.
        </p>
        <div className="topics">
          <div>
            <IoMdCheckmark />
            <p>
              <b>10 written and audio sessions </b> guide you in decoding the
              language of numbers so that you can easily receive their signs and
              messages.
            </p>
          </div>
          <div>
            <IoMdCheckmark />
            <p>
              <b>Intuitive exercises and homework </b> walk you through the
              energies and values of numbers and number sequences so you can
              become your own authority.
            </p>
          </div>
          <div>
            <IoMdCheckmark />
            <p>
              <b> A handy reference </b> to numerical meanings so you can
              uncover your soul's gifts, challenges, lessons, and purpose - and
              receive spiritual guidance along your path.
            </p>
          </div>
          <div>
            <IoMdCheckmark />
            <p>
              <b>Expert techniques </b> for manifestation offer simple ways to
              use numbers to co-create with the universe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseExpect;
