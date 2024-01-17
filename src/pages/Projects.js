import React from "react";
import Preloader from "../components/Preloader";
import Macbook from "../components/Macbook";

export default function Projects() {
  return (
    <div className="projects">
      <Preloader />
      <div className="projects__container">
        <h1>
          <span>Real</span> Projects
        </h1>

        <div className="projects__projects">
          <div className="projects__projects-project">
            <Macbook title="Youtube App" img="/images/projects/assalaam.png" />
            <div className="projects__projects-project-content">
              <h2>Assalaam UK - Charity</h2>
              <p>
                charity-focused web project – a purpose-built platform designed
                to inspire positive change. With a user-friendly interface,
                users can easily contribute to various donation projects, stay
                informed about ongoing charity activities through news updates,
                and track the progress of their donations. This fully functional
                website controlled by admins to efficiently manage the entire
                platform, ensuring a seamless experience for both donors and
                beneficiaries.
              </p>
              <h3>Technologies</h3>
              <div className="projects__projects-project-technologies">
                <img src="/images/react.png" alt="" />
                <img src="/images/redux.png" alt="" />
                <img src="/images/sass.png" alt="" />
                <img src="/images/react-bootstrap.png" alt="" />
                <img src="/images/node.png" alt="" />
                <img src="/images/expressjs.png" alt="" />
                <img src="/images/mongo.png" alt="" />
                <img src="/images/stripe.png" alt="" />
              </div>
              <div className="projects__projects-project-action">
                <a
                  href="https://www.assalaamuk.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live{" "}
                  <span>
                    <i class="far fa-eye"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="projects__projects-project">
            <Macbook img="/images/projects/proactiveuz.png" />
            <div className="projects__projects-project-content">
              <h2>Proactiveuz - Study Abroad Agency </h2>
              <p>
                This project involves creating a user-friendly web app for a
                study abroad consulting agency. Users can explore detailed
                university information, stay updated on scholarship news, and
                effortlessly connect with the agency for personalized guidance.
                The goal is to streamline the study abroad process and provide a
                convenient platform for users to access essential information.
              </p>
              <h3>Technologies</h3>
              <div className="projects__projects-project-technologies">
                <img src="/images/react.png" alt="" />
                <img src="/images/redux.png" alt="" />
                <img src="/images/sass.png" alt="" />
                <img src="/images/react-bootstrap.png" alt="" />
                <img src="/images/node.png" alt="" />
                <img src="/images/expressjs.png" alt="" />
                <img src="/images/mongo.png" alt="" />
              </div>
              <div className="projects__projects-project-action">
                <a
                  href="https://graceful-quokka-b24be1.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live{" "}
                  <span>
                    <i class="far fa-eye"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <h1>
          <span>Personal</span> Projects
        </h1>
      </div>
    </div>
  );
}
