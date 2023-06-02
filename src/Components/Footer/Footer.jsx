import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="footer-and-end">
    <div className="footer-container">
      <div className="logo-container">
        <img
          src="	https://aplus.weondevelopment.com/storage/TRFHCLxT4CRCkWAdii9Xt7d7wupjW5ofsq3Hu9fj.png"
          alt=""
        />
      </div>
      <div className="router-container">
        <a class="link" href="/">
          Haqqımızda
        </a>
        <a class="link" href="/">
          Aksiyalar
        </a>
        <a class="link" href="/">
          Xüsusi Təkliflər
        </a>
        <a class="link" href="/">
          KSM
        </a>
        <a class="link" href="/">
          Karyera
        </a>
        <a class="link" href="/">
          Əlaqə
        </a>
      </div>
      <div className="sosial-media-icons">
            <FaTelegram className="icon" />
            <FaFacebook className="icon" />
            <span className="linkedin">
              <FaLinkedinIn className="icon-linkedin" />
            </span>
            <span className="instagram">
              <FaInstagram className="icon-instagram" />
            </span>
          </div>
    </div>
    <span class="copyright">Copyright © 2021 Aplus. All rights reserved.</span>
    </div>
  );
}

export default Footer;
