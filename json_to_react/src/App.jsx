import React from "react";
import { useEffect } from "react";
import jsonData from "./json_data/data.json";
import Hero from "./components/hero_section/Hero";
import About from "./components/course_about/About";
import "./App.css";
import Registration from "./components/registration/Registration";
import CourseExpect from "./components/coruse_expect/CourseExpect";
import AboutInstructor from "./components/about_instructor/AboutInstructor";
import Testimonial from "./components/testimonial/Testimonial";
function App() {
  const { testimonial, course } = jsonData;

  return (
    <div>
      <Hero name={jsonData.instructor.name} title={course.title} />
      <div className="main">
        <div className="manu_list">
          <ul>
            <li>ABOURT</li>
            <li>INSTRUCTOR</li>
            <li>REVIEWS</li>
          </ul>
        </div>
        <div className="content">
          <div>
            <About />
            <CourseExpect
              key_topics={course.key_topics}
              what_to_expect={course.what_to_expect}
            />
          </div>
          <Registration fee={course.fee.amount} />
        </div>
        <div>
          <AboutInstructor />
        </div>
      </div>
      <Testimonial
        text={testimonial.text}
        reviewer_name={testimonial.reviewer_name}
        reviewer_designation={testimonial.reviewer_designation}
      />
    </div>
  );
}

export default App;
