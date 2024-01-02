import React from "react";
import { useEffect } from "react";
import jsonData from "./json_data/data.json";
import Hero from "./components/hero_section/Hero";
import About from "./components/course_about/About";
import "./App.css";
import Registration from "./components/registration/Registration";
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
          <About />
          <Registration />
        </div>
      </div>
    </div>
  );
}

export default App;
