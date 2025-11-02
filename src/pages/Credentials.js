import React from "react";
import Preloader from "../components/Preloader";
import { Link } from "react-router-dom";

export default function Credentials() {
  return (
    <div className="credentials">
      <Preloader />
      <div className="credentials__container">
        <div className="credentials__left">
          <div className="credentials__profile">
            <img src="/images/me.jpg" alt="" />
            <h1>Shukhrat Mamadaliev</h1>
            <p>@shukhratmamadaliev</p>
            <ul>
              <li>
                <a
                  href="https://github.com/Shukhratmamadaliev9797"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-square-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Shukhratmamadaliev9797"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/shukhratmamadaliev0969/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-square-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/shukhrat-mamadaliev-b5423019a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
            <Link to="/contact" className="credentials__profile-contact">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="credentials__right">
          <div className="credentials__skills">
            <h3>SKILLS</h3>
            <h4>Frond-End Technologies</h4>
            <div className="credentials__skills-skills">
              <div className="credentials__skills-skill">
                <img src="/images/html.png" alt="" />
              </div>
              <div className="credentials__skills-skill">
                <img src="/images/css.png" alt="" />
              </div>
              <div className="credentials__skills-skill">
                <img src="/images/js.png" alt="" />
              </div>
              <div className="credentials__skills-skill">
                <img src="/images/bootstrap.png" alt="" />
              </div>
              <div className="credentials__skills-skill">
                <img src="/images/react.png" alt="" />
              </div>

              <div className="credentials__skills-skill">
                <img src="/images/redux.png" alt="" />
              </div>
              <div className="credentials__skills-skill">
                <img src="/images/sass.png" alt="" />
              </div>
              <div className="credentials__skills-skill">
                <img src="/images/react-bootstrap.png" alt="" />
              </div>
            </div>
            <h4>Back-End Technologies</h4>
            <div className="credentials__skills-skills">
              <div className="credentials__skills-skill">
                <img src="/images/node.png" alt="" />
              </div>
              <div className="credentials__skills-skill">
                <img src="/images/expressjs.png" alt="" />
              </div>
              <div className="credentials__skills-skill">
                <img src="/images/mongo.png" alt="" />
              </div>
              <div className="credentials__skills-skill">
                <img src="/images/socket.png" alt="" />
              </div>
            </div>
            <h4>Others</h4>
            <div className="credentials__skills-skills">
              <div className="credentials__skills-skill">
                <img src="/images/aws.png" alt="" />
              </div>
              <div className="credentials__skills-skill">
                <img src="/images/stripe.png" alt="" />
              </div>
              <div className="credentials__skills-skill">
                <img src="/images/cloudinary.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
