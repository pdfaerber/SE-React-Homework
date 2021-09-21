import React from "react";
import "./Footer.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import {
  //   FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiCoffeescript } from "react-icons/si";

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  console.log(currentYear);
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our Coffee Club to receive our latest news, offerings and
          specials!
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>

        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">Operations</Link>
            <Link to="/">Suppliers</Link>
            <Link to="/">Partners</Link>
            <Link to="/">Careers</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Notable Coffee Shops</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Making Coffee</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Twitter</Link>
            <Link to={"//github.com/pdfaerber"}>Github</Link>
            <Link to={"//www.linkedin.com/in/patrickdfaerber"}>LinkedIn</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <SiCoffeescript className="navbar-icon" />
              Patrick's House of Java
            </Link>
          </div>
          <small className="website-rights">
            Patrick's House of Java © {currentYear}
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>

            <Link
              className="social-icon-link"
              to={"//github.com/pdfaerber"}
              target="_blank"
              aria-label="Github"
            >
              <FaGithub />
            </Link>
            <Link
              className="social-icon-link"
              to={"//www.linkedin.com/in/patrickdfaerber"}
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
