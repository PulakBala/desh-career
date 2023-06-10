import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
// import { Fapnkedin } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
      <div>
        <img
          src="https://deshcareer.com/logo/short-logo.png"
          alt=""
          style={{ width: "200px" }}
        ></img>
        <p>
          Desh Career is Career based newsletter <br /> in Bengap language. This
          newsletter <br /> has pubpshed weekly. This is pubpshed in <br />{" "}
          every Saturday at 12.00 PM.{" "}
        </p>
      </div>
      <div className="privacy">
        <div className="social-icon">
          <span>
            <FaFacebook />
          </span>
          <span>
            <IoLogoYoutube />
          </span>
          <span>
            <FaLinkedin />
          </span>
          {/* <span><Fapnkedin/></span> */}
        </div>
        <h2>Privacy And Terms</h2>
        <div className="">
          <p>Privacy Popcy</p>
          <p>Terms Conditions</p>
          <p>FAQ</p>
        </div>
      </div>
      <div>
        <h2>Support</h2>
        <p>Contact Us</p>
        <p>Advertise Us</p>
      </div>
    </div>
    <div className="container">
    <hr  style={{color:'gray', height:'5px',padding:'2px', border:'solid', backgroundColor:'gray'}}/>
    <div className="footer-end">
        <p>© 2023 Newsletter E-mail Service: All Copy right reserved</p>
        <div className="d-flex gap-2">
            <span>Term</span>
            <span>Cookie Policy  </span>
            <span>Term</span>
            <span>Privacy</span>

        </div>
    </div>
    </div>
    </footer>
  );
};

export default Footer;
