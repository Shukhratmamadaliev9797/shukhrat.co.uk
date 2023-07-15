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
                <a>
                  <i class="fa-brands fa-square-github"></i>
                </a>
              </li>
              <li>
                <a>
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a>
                  <i class="fa-brands fa-square-facebook"></i>
                </a>
              </li>
              <li>
                <a>
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
            <Link className="credentials__profile-contact">Contact Me</Link>
          </div>
        </div>
        <div className="credentials__right">
          <div className="credentials__about">
            <h3>ABOUT ME</h3>
            <p>
              Sit amet luctussd fav venenatis, lectus magna fringilla inis urna,
              porttitor rhoncus dolor purus non enim praesent in elementum sahas
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etisam dignissim diam quis enim lobortis viverra orci sagittis eu
              volutpat odio facilisis mauris sit.
            </p>
            <p>
              Scelerisque fermentum duisi faucibus in ornare quam sisd sit amet
              luctussd fav venenatis, lectus magna fringilla zac urna, porttitor
              rhoncus dolor purus non enim praesent cuz elementum sahas
              facilisis leot.
            </p>
          </div>
          <div className="credentials__experience">
            <h3>EXPERIENCE</h3>
            <div className="credentials__experience-experience">
              <span>2019 - current</span>
              <h4>Web Developer Freelancer</h4>
              <p>
                Sit amet luctussd fav venenatis, lectus magna fringilla inis
                urna, porttitor rhoncus dolor purus non enim praesent in
                elementum sahas facilisis leo, vel fringilla est ullamcorper
                eget nulla facilisi etisam dignissim diam quis enim lobortis
                viverra orci sagittis eu volutpat odio facilisis mauris sit.
              </p>
            </div>
            <div className="credentials__experience-experience">
              <span>2019 - current</span>
              <h4>Web Developer Freelancer</h4>
              <p>
                Sit amet luctussd fav venenatis, lectus magna fringilla inis
                urna, porttitor rhoncus dolor purus non enim praesent in
                elementum sahas facilisis leo, vel fringilla est ullamcorper
                eget nulla facilisi etisam dignissim diam quis enim lobortis
                viverra orci sagittis eu volutpat odio facilisis mauris sit.
              </p>
            </div>
          </div>
          <div className="credentials__skills">
            <h3>SKILLS</h3>
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
                <img src="/images/node.png" alt="" />
              </div>
              <div className="credentials__skills-skill">
                <img src="/images/redux.png" alt="" />
              </div>
              <div className="credentials__skills-skill">
                <img src="/images/mongo.png" alt="" />
              </div>
              <div className="credentials__skills-skill">
                <img src="/images/aws.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
