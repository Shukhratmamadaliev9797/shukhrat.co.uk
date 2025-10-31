import React from "react";
import Preloader from "../components/Preloader";
import Macbook from "../components/Macbook";
import data from "../data";

export default function Projects() {
  return (
    <div className="projects">
      <Preloader />
      <div className="projects__container">
        <h1>
          <span>Real</span> Projects
        </h1>

        <div className="projects__projects">
          {data?.projects?.real.map((project, index) => {
            return <div className="projects__projects-project">
              <Macbook title="Youtube App" img={project.img} />
              <div className="projects__projects-project-content">
                <h2>{project.name}</h2>
                <p>
                  {project.description}
                </p>
                <h3>Technologies</h3>
                <div className="projects__projects-project-technologies">
                  {project.technologies?.map((tech, idx) => { return <img src={`/images/${tech}.png`} alt="" /> })}

                </div>
                <div className="projects__projects-project-action">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live{" "}
                    <span>
                      <i class="far fa-eye"></i>
                    </span>
                  </a>
                  {project.github ? (<a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github{" "}
                    <span>
                      <i class="fa-brands fa-github"></i>
                    </span>
                  </a>) : ''}
                </div>
              </div>
            </div>
          })}


        </div>
        <h1>
          <span>Personal</span> Projects
        </h1>
        <div className="projects__projects">
          {data?.projects?.personal.map((project, index) => {
            return <div className="projects__projects-project">
              <Macbook title="Youtube App" img={project.img} />
              <div className="projects__projects-project-content">
                <h2>{project.name}</h2>
                <p>
                  {project.description}
                </p>
                <h3>Technologies</h3>
                <div className="projects__projects-project-technologies">
                  {project.technologies?.map((tech, idx) => { return <img src={`/images/${tech}.png`} alt="" /> })}

                </div>
                <div className="projects__projects-project-action">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live{" "}
                    <span>
                      <i class="far fa-eye"></i>
                    </span>
                  </a>
                  {project.github ? (<a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github{" "}
                    <span>
                      <i class="fa-brands fa-github"></i>
                    </span>
                  </a>) : ''}

                </div>

              </div>
            </div>
          })}


        </div>
      </div>
    </div>
  );
}
