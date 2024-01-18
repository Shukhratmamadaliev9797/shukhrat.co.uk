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
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="contact__form"
          netlify
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <div className="contact__form-title">
            <h1>
              Let’s work <span>together.</span>
            </h1>
            <img src="/images/logo.png" alt="" />
          </div>
          <input type="text" name="name" placeholder="Name*" />
          <input type="email" name="email" placeholder="Email*" />
          <input type="text" name="subject" placeholder="Your Subject*" />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message*"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
