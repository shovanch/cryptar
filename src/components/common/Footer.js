import React from "react";

import { ReactComponent as Mail } from "../../assets/images/mail.svg";
import { ReactComponent as Github } from "../../assets/images/github.svg";
import { ReactComponent as Twitter } from "../../assets/images/twitter.svg";
import { ReactComponent as Linkedin } from "../../assets/images/linkedin.svg";

const Footer = () => (
  <footer class="footer">
    <h1>Made with ☕ and 💛🧡 by Shovan Chatterjee</h1>
    <div class="footer-links">
      <a href="#">
        <Mail className="footer-icon" />
      </a>
      <a href="#">
        <Github className="footer-icon" />
        {/* <img src={github} alt="" /> */}
      </a>
      <a href="#">
        <Twitter className="footer-icon" />
        {/* <img src={twitter} alt="" /> */}
      </a>
      <a href="#">
        <Linkedin className="footer-icon" />
        {/* <img src={linkedin} alt="" /> */}
      </a>
    </div>
  </footer>
);

export default Footer;
