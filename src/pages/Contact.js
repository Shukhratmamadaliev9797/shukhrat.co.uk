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
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className="contact__info-info-text">
                <span>MAIL</span>
                <p>
                  Shukhratmamadaliev.dev
                  <br />
                  @gmail.com
                </p>
              </div>
            </li>

            <li>
              <div className="contact__info-info-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="contact__info-info-text">
                <span>CONTACT</span>
                <p>
                  +99870 106 27 29
                  <br />
                  +99894 171 14 38
                </p>
              </div>
            </li>

            <li>
              <div className="contact__info-info-iconlast">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="contact__info-info-text">
                <span>LOCATION</span>
                <p>
                  Namangan, <br />
                  Uzbekistan
                </p>
              </div>
            </li>
          </ul>

          <h2>SOCIAL INFO</h2>
          <ul className="contact__info-social">
            <li>
              <a>
                <i className="fa-brands fa-square-github"></i>
              </a>
            </li>
            <li>
              <a>
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a>
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* ✅ Netlify form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify
          action="/"
          className="contact__form"
        >
          <input type="hidden" name="form-name" value="contact" />

          {/* ✅ Netlify redirect back to contact page */}
          <input type="hidden" name="redirect" value="/contact" />

          {/* Netlify bot field */}
          <p hidden>
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <div className="contact__form-title">
            <h1>
              Let’s work <span>together</span>
            </h1>
            <img src="/images/logo.png" alt="" />
          </div>

          <input type="text" name="name" placeholder="Name*" required />
          <input type="email" name="email" placeholder="Email*" required />
          <input type="text" name="subject" placeholder="Your Subject*" />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message*"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
