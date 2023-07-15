import React from "react";
import Preloader from "../components/Preloader";

export default function About() {
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
                I am a San francisco-based product designer with a focus on web
                design, illustration, a visual development. I have a diverse
                range of experience having worked across various fields and
                industries.
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
        <div className="about__3">
          <div className="home__2-3">
            <div className="home__2-3-social">
              <i class="home__2-3-social-icon fa-brands fa-linkedin-in"></i>
              <i class="home__2-3-social-icon fa-brands fa-github"></i>
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
          <div className="home__3-2">
            <i class="home__3-2-icon fa-solid fa-paper-plane"></i>
            <h1>
              Let's <br />
              work <span>together</span>
            </h1>
            <img src="/images/logo.png" alt="" />
          </div>
          <div className="home__1-2-2-1">
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
          </div>
        </div>
      </div>
    </div>
  );
}
