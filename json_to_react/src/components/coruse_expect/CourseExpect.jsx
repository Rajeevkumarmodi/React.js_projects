import React from "react";
import "./courseExpect.css";
import { IoMdCheckmark } from "react-icons/io";

function CourseExpect({ key_topics, what_to_expect }) {
  return (
    <div className="expect">
      <h2>What to expect from the course</h2>
      <div
        className="points"
        dangerouslySetInnerHTML={{ __html: what_to_expect.html_content }}
      ></div>
      <h2>Key topics covered</h2>
      <div>
        <p>
          Temporibus autem quibusdam et aut officiis debitis aut rerum
          necessitatibus saepe eveniet ut et voluptates repudiandae sint et
          molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
          perferendis doloribus asperiores repellat.
        </p>
        <div
          className="topics"
          dangerouslySetInnerHTML={{ __html: key_topics.html_content }}
        ></div>
      </div>
    </div>
  );
}

export default CourseExpect;
