import React from "react";
import Preloader from "../components/Preloader";
import Marquee from "react-fast-marquee";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
export default function Home() {
  const isTablet = useMediaQuery({ query: "(max-width: 850px)" });

  return (
    <>
      <Preloader />
      <div className="home">
        <div className="home__1">
          <Link to="/about" className="home__1-1">
            <div className="home__1-1-content">
              <div className="home__1-1-img">
                <img src="/images/about1.png" alt="" />
              </div>
              <div className="home__1-1-text">
                <span>A WEB DEVELOPER</span>
                <h1>
                  SHUKHRAT <br /> MAMADALIEV
                </h1>
                <p>I am a Web Developer and Designer based in London</p>
                <div className="home__1-1-logo">
                  <img src="/images/logo.png" alt="" />
                </div>
              </div>
            </div>
          </Link>
          <div className="home__1-2">
            <div className="home__1-2-1">
              <Marquee speed={100} className="home__1-2-1-marquee">
                <ul>
                  <li>
                    <span>LATEST WORK AND</span> FEATURED
                  </li>
                  <li>
                    <i class="home__1-2-1-icon fa-solid fa-star-of-life"></i>
                  </li>
                  <li>
                    <span>LATEST WORK AND</span> FEATURED
                  </li>
                  <li>
                    <i class="home__1-2-1-icon fa-solid fa-star-of-life"></i>
                  </li>
                  <li>
                    <span>LATEST WORK AND</span> FEATURED
                  </li>
                  <li>
                    <i class="home__1-2-1-icon fa-solid fa-star-of-life"></i>
                  </li>
                  <li>
                    <span>LATEST WORK AND</span> FEATURED
                  </li>
                  <li>
                    <i class="home__1-2-1-icon fa-solid fa-star-of-life"></i>
                  </li>
                </ul>
              </Marquee>
            </div>
            <div className="home__1-2-2">
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
              <Link to="/projects" className="home__1-2-2-2">
                <div className="home__1-2-2-2-project">
                  <img src="/images/projects2.png" alt="" />
                </div>
                <div className="home__1-2-2-2-title">
                  <div>
                    <span>SHOWCASE</span>
                    <h2>Projects</h2>
                  </div>
                  <div>
                    <img src="/images/logo.png" alt="" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {isTablet ? (
          <div className="home__tablet">
            <div className="home__tablet-1">
              <div className="home__tablet-1-1">
                <div className="home__tablet-1-1-blog">
                  <img src="/images/blog.png" alt="" />
                </div>
                <div className="home__2-1-title">
                  <div>
                    <span>Resume</span>
                    <h2>Download</h2>
                  </div>
                  <div>
                    <img src="/images/logo.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="home__tablet-1-2">
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
            </div>
            <div className="home__tablet-2">
              <Link to="/services">
                <div className="home__tablet-2-services">
                  <i class="home__2-2-services-icon fa-solid fa-cubes"></i>
                  <i class="home__2-2-services-icon fa-solid fa-code"></i>
                  <i class="home__2-2-services-icon fa-solid fa-desktop"></i>
                  <i class="home__2-2-services-icon fa-solid fa-mobile-screen-button"></i>
                </div>
                <div className="home__2-2-title">
                  <div>
                    <span>SPECIALIZATION</span>
                    <h2>Services Offering</h2>
                  </div>
                  <div>
                    <img src="/images/logo.png" alt="" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ) : (
          <div className="home__2">
            <div className="home__2-1">
              <div className="home__2-1-blog">
                <img src="/images/resume5.png" alt="" />
              </div>
              <div className="home__2-1-title">
                <div>
                  <span>Resume</span>
                  <h2>Download</h2>
                </div>
                <div>
                  <img src="/images/logo.png" alt="" />
                </div>
              </div>
            </div>
            <Link to="/services" className="home__2-2">
              <div className="home__2-2-services">
                <i class="home__2-2-services-icon fa-solid fa-cubes"></i>
                <i class="home__2-2-services-icon fa-solid fa-code"></i>
                <i class="home__2-2-services-icon fa-solid fa-desktop"></i>
                <i class="home__2-2-services-icon fa-solid fa-mobile-screen-button"></i>
              </div>
              <div className="home__2-2-title">
                <div>
                  <span>SPECIALIZATION</span>
                  <h2>Services Offering</h2>
                </div>
                <div>
                  <img src="/images/logo.png" alt="" />
                </div>
              </div>
            </Link>
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
          </div>
        )}

        <div className="home__3">
          <div className="home__3-1">
            <div className="home__3-1-card">
              <h1>02</h1>
              <p>
                YEARS <br />
                EXPERIENC
              </p>
            </div>
            <div className="home__3-1-card">
              <h1>+20</h1>
              <p>
                CLIENTS <br />
                WORLDWIDE
              </p>
            </div>
            <div className="home__3-1-card">
              <h1>+50</h1>
              <p>
                TOTAL <br />
                PROJECTS
              </p>
            </div>
          </div>
          <Link to="/contact" className="home__3-2">
            <i class="home__3-2-icon fa-solid fa-paper-plane"></i>
            <h1>
              Let's <br />
              work <span>together</span>
            </h1>
            <img src="/images/logo.png" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
}
