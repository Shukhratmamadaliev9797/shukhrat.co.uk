import React from "react";
import Preloader from "../components/Preloader";

export default function Contact() {
  return (
    <div className="contact">
      <Preloader />
      <div className="contact__container">
        <div className="contact__info">
          <h2>CONTACT INFO</h2>
          <ul className="contact__info-info">
            <li>
              <div className="contact__info-info-icon">
                <i class="fa-regular fa-envelope"></i>
              </div>
              <div className="contact__info-info-text">
                <span>MAIL US</span>
                <p>
                  Shukhratmamadaliev
                  <br />
                  @gmail.com
                </p>
              </div>
            </li>
            <li>
              <div className="contact__info-info-icon">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div className="contact__info-info-text">
                <span>CONTACT US</span>
                <p>
                  07523230970
                  <br />
                  07732297254
                </p>
              </div>
            </li>
            <li>
              <div className="contact__info-info-iconlast">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div className="contact__info-info-text">
                <span>LOCATION</span>
                <p>
                  Monthope Rd, <br />
                  London
                </p>
              </div>
            </li>
          </ul>
          <h2>SOCIAL INFO</h2>
          <ul className="contact__info-social">
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
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <form className="contact__form">
          <div className="contact__form-title">
            <h1>
              Let’s work <span>together.</span>
            </h1>
            <img src="/images/logo.png" alt="" />
          </div>
          <input type="text" placeholder="Name*" />
          <input type="text" placeholder="Email*" />
          <input type="text" placeholder="Your Subject*" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message*"
          ></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}
