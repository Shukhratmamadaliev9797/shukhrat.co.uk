import React from "react";
import Preloader from "../components/Preloader";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export default function Services() {
  const isTablet = useMediaQuery({ query: "(max-width: 1200px)" });
  return (
    <div className="services">
      <Preloader />
      <div className="services__container">
        {isTablet ? (
          <>
            <div className="services__1">
              <div className="services__1-right">
                <h1>MY OFFERINGS</h1>
                <div className="services__1-right-services">
                  <div className="services__1-right-box">
                    <h5>Photoshop</h5>
                    <p>
                      Sit amet luctussd fav venenatis, lectus magna fringilla
                      inis urna, porttitor asna rhoncus dolor purus non enim
                      aberitin praesent in elementum sahas facilisis leo, vel
                      fringilla est etisam dignissim.
                    </p>
                  </div>
                  <div className="services__1-right-box">
                    <h5>Web Development</h5>
                    <p>
                      Sit amet luctussd fav venenatis, lectus magna fringilla
                      inis urna, porttitor asna rhoncus dolor purus non enim
                      aberitin praesent in elementum sahas facilisis leo, vel
                      fringilla est etisam dignissim.
                    </p>
                  </div>
                  <div className="services__1-right-box">
                    <h5>Web Design</h5>
                    <p>
                      Sit amet luctussd fav venenatis, lectus magna fringilla
                      inis urna, porttitor asna rhoncus dolor purus non enim
                      aberitin praesent in elementum sahas facilisis leo, vel
                      fringilla est etisam dignissim.
                    </p>
                  </div>
                  <div className="services__1-right-box">
                    <h5>Mobile Development</h5>
                    <p>
                      Sit amet luctussd fav venenatis, lectus magna fringilla
                      inis urna, porttitor asna rhoncus dolor purus non enim
                      aberitin praesent in elementum sahas facilisis leo, vel
                      fringilla est etisam dignissim.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="services__1-left">
              <ul>
                <li>
                  <i class="icon fa-solid fa-cubes"></i> <span>Photoshop</span>
                </li>
                <li>
                  <i class="icon fa-solid fa-code"></i>
                  <span>Wed Development</span>
                </li>
                <li>
                  <i class="icon fa-solid fa-desktop"></i>
                  <span>Web Design</span>
                </li>
                <li>
                  <i class="icon fa-solid fa-mobile-screen-button"></i>
                  <span>Mobile Development</span>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div className="services__1">
            <div className="services__1-left">
              <ul>
                <li>
                  <i class="icon fa-solid fa-cubes"></i> <span>Photoshop</span>
                </li>
                <li>
                  <i class="icon fa-solid fa-code"></i>
                  <span>Wed Development</span>
                </li>
                <li>
                  <i class="icon fa-solid fa-desktop"></i>
                  <span>Web Design</span>
                </li>
                <li>
                  <i class="icon fa-solid fa-mobile-screen-button"></i>
                  <span>Mobile Development</span>
                </li>
              </ul>
            </div>
            <div className="services__1-right">
              <h1>MY OFFERINGS</h1>
              <div className="services__1-right-services">
                <div className="services__1-right-box">
                  <h5>Photoshop</h5>
                  <p>
                    Sit amet luctussd fav venenatis, lectus magna fringilla inis
                    urna, porttitor asna rhoncus dolor purus non enim aberitin
                    praesent in elementum sahas facilisis leo, vel fringilla est
                    etisam dignissim.
                  </p>
                </div>
                <div className="services__1-right-box">
                  <h5>Web Development</h5>
                  <p>
                    Sit amet luctussd fav venenatis, lectus magna fringilla inis
                    urna, porttitor asna rhoncus dolor purus non enim aberitin
                    praesent in elementum sahas facilisis leo, vel fringilla est
                    etisam dignissim.
                  </p>
                </div>
                <div className="services__1-right-box">
                  <h5>Web Design</h5>
                  <p>
                    Sit amet luctussd fav venenatis, lectus magna fringilla inis
                    urna, porttitor asna rhoncus dolor purus non enim aberitin
                    praesent in elementum sahas facilisis leo, vel fringilla est
                    etisam dignissim.
                  </p>
                </div>
                <div className="services__1-right-box">
                  <h5>Mobile Development</h5>
                  <p>
                    Sit amet luctussd fav venenatis, lectus magna fringilla inis
                    urna, porttitor asna rhoncus dolor purus non enim aberitin
                    praesent in elementum sahas facilisis leo, vel fringilla est
                    etisam dignissim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

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
