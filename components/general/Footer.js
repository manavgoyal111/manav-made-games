import React from "react";
import { FaRegCopyright, FaUserAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerSocial">
        <li className="footerSocialItem">
          <a href="manavgoyal.me" target="_blank">
            <div class="footerSocialItemIcon">
              <FaRegCopyright />
            </div>{" "}
            Manav Goyal
          </a>
        </li>
        <li className="footerSocialItem">
          <a href="mailto:manavgoyaltheboss@gmail.com" target="_blank" rel="noreferrer">
            <div class="footerSocialItemIcon">
              <FaUserAlt />
            </div>{" "}
            manavgoyaltheboss@gmail.com
          </a>
        </li>
        <li className="footerSocialItem">
          <a href="https://www.linkedin.com/in/manav-goyal" target="_blank" rel="noreferrer">
            <div class="footerSocialItemIcon">
              <FaLinkedinIn />
            </div>{" "}
            LinkedIn
          </a>
        </li>
        <li className="footerSocialItem">
          <a href="https://github.com/manavgoyal111" target="_blank" rel="noreferrer">
            <div class="footerSocialItemIcon">
              <FaGithub />
            </div>{" "}
            GitHub
          </a>
        </li>
      </div>
    </div>
  );
}

export default Footer;
