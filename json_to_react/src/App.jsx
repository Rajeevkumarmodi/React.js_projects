import React from "react";
import { useEffect } from "react";
import jsonData from "./json_data/data.json";
import Hero from "./components/hero_section/Hero";
import About from "./components/course_about/About";
import "./App.css";
import Registration from "./components/registration/Registration";
import CourseExpect from "./components/coruse_expect/CourseExpect";
import AboutInstructor from "./components/about_instructor/AboutInstructor";
function App() {
  return (
    <div>
      <Hero name={jsonData.instructor.name} title={jsonData.course.title} />
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
            <CourseExpect />
          </div>
          <Registration />
        </div>
        <div>
          <AboutInstructor />
        </div>
      </div>
    </div>
  );
}

export default App;
