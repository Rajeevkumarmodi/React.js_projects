import React from "react";
import { useEffect } from "react";
import jsonData from "./json_data/data.json";
import Hero from "./components/hero_section/Hero";

function App() {
  return (
    <div>
      <Hero name={jsonData.instructor.name} title={jsonData.course.title} />
    </div>
  );
}

export default App;
