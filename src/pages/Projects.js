import React from "react";
import Preloader from "../components/Preloader";
import Macbook from "../components/Macbook";

export default function Projects() {
  return (
    <div className="projects">
      <Preloader />
      <div className="projects__container">
        <h1>Projects</h1>
        <div className="projects__projects">
          <Macbook title="Youtube App" />
          <Macbook title="Youtube App" />
          <Macbook title="Youtube App" />
        </div>
      </div>
    </div>
  );
}
