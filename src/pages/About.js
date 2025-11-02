import React from "react";
import Preloader from "../components/Preloader";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export default function About() {
  const isTablet = useMediaQuery({ query: "(max-width: 1200px)" });
  return (
    <div className="about">
      <Preloader />
      <div className="about__container">
        <div className="about__1">
          <div className="about__1-1">
            <img src="/images/me.jpg" alt="" />
          </div>
          <div className="about__1-2">
            <h1>SELF-SUMMARY</h1>
            <div className="about__1-2-2">
              <i class="icon fa-brands fa-uikit"></i>
              <h2>Shukhrat Mamadaliev</h2>
              <p>
                Web Developer with hands-on experience building responsive,
                clean, and user-friendly web pages. Enjoys working in
                collaborative teams, communicates clearly, and is always open to
                feedback. Naturally curious and consistently learning new tools,
                frameworks, and best practices to improve code quality,
                performance, and overall project outcomes. Passionate about
                turning ideas into smooth, functional, and visually appealing
                digital experiences. Always motivated to take on new challenges
                and contribute to meaningful projects.
              </p>
            </div>
          </div>
        </div>
        <div className="about__2">
          <div className="about__2-1">
            <h4>Experience</h4>
            <div>
              <span>2019 - present</span>
              <h6>Freelancer</h6>
              <p>Web Development and Design</p>
            </div>
            <div>
              <span>6 Months Contract</span>
              <h6>Synkd</h6>
              <p>Front-End Developer</p>
            </div>
          </div>
          <div className="about__2-2">
            <h4>Education</h4>
            <div>
              <span>2013 - 2016</span>
              <h6>Information Technology</h6>
              <p>College</p>
            </div>
            <div>
              <span>2019 - 2023</span>
              <h6>Software Developer</h6>
              <p>University of Ulster</p>
            </div>
          </div>
        </div>
        {isTablet ? (
          <>
            <div className="about__tablet">
              <div className="home__2-3">
                <div className="home__2-3-social">
                  <a
                    href="https://www.linkedin.com/in/shukhrat-mamadaliev-b5423019a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="home__2-3-social-icon fa-brands fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://github.com/Shukhratmamadaliev9797"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="home__2-3-social-icon fa-brands fa-github"></i>
                  </a>
                </div>
                <div className="home__2-3-title">
                  <div>
                    <span>STAY WITH ME</span>
                    <h2>Profiles</h2>
                  </div>
                  <div>
                    <img src="/images/logo.png" alt="" />
                  </div>
                </div>
              </div>

              <Link to="/credentials" className="home__1-2-2-1">
                <div className="home__1-2-2-1-sign">
                  <img src="/images/sign.png" alt="" />
                </div>
                <div className="home__1-2-2-1-title">
                  <div>
                    <span>MORE ABOUT ME</span>
                    <h2>Credentials</h2>
                  </div>
                  <div>
                    <img src="/images/logo.png" alt="" />
                  </div>
                </div>
              </Link>
            </div>
            <Link to="/contact" className="home__3-2">
              <i class="home__3-2-icon fa-solid fa-paper-plane"></i>
              <h1>
                Let's <br />
                work <span>together</span>
              </h1>
              <img src="/images/logo.png" alt="" />
            </Link>
          </>
        ) : (
          <div className="about__3">
            <div className="home__2-3">
              <div
                className="home__2-3-social"
                style={{ marginBottom: "3.5rem" }}
              >
                <a
                  href="https://www.linkedin.com/in/shukhrat-mamadaliev-b5423019a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="home__2-3-social-icon fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/Shukhratmamadaliev9797"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="home__2-3-social-icon fa-brands fa-github"></i>
                </a>
              </div>
              <div className="home__2-3-title">
                <div>
                  <span>STAY WITH ME</span>
                  <h2>Profiles</h2>
                </div>
                <div>
                  <img src="/images/logo.png" alt="" />
                </div>
              </div>
            </div>
            <div>
              <Link to="/contact" className="home__3-2">
                <i class="home__3-2-icon fa-solid fa-paper-plane"></i>
                <h1>
                  Let's <br />
                  work <span>together</span>
                </h1>
                <img src="/images/logo.png" alt="" />
              </Link>
            </div>
            <Link to="/credentials" className="home__1-2-2-1">
              <div className="home__1-2-2-1-sign">
                <img src="/images/sign.png" alt="" />
              </div>
              <div className="home__1-2-2-1-title">
                <div>
                  <span>MORE ABOUT ME</span>
                  <h2>Credentials</h2>
                </div>
                <div>
                  <img src="/images/logo.png" alt="" />
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
