import React from "react";

import { ReactComponent as Mail } from "../../assets/images/mail.svg";
import { ReactComponent as Github } from "../../assets/images/github.svg";
import { ReactComponent as Twitter } from "../../assets/images/twitter.svg";
import { ReactComponent as Linkedin } from "../../assets/images/linkedin.svg";

const Footer = () => (
  <footer className="footer">
    <h1>Made with ☕ and 💛🧡 by Shovan Chatterjee</h1>
    <div className="footer-links">
      <a href="mailto:hello@shovanch.com">
        <Mail className="footer-icon" />
      </a>
      <a
        href="https://github.com/shovanch"
        target="blank"
        rel="noopener noreferrer"
      >
        <Github className="footer-icon" />
      </a>
      <a
        href="https://twitter.com/shovan_ch/"
        target="blank"
        rel="noopener noreferrer"
      >
        <Twitter className="footer-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/shovanch/"
        target="blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="footer-icon" />
      </a>
    </div>
    <a href="https://nomics.com" target="blank" rel="noopener noreferrer">
      Crypto Market Cap & Pricing Data Provided By Nomics
    </a>
  </footer>
);

export default Footer;
