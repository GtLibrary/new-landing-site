import React from "react";
import Container from "react-bootstrap/Container";
import { GithubIcon, TwitterIcon, LinkIcon } from "./SocialIcon"
import "../styles/Footer.css"

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer-body">
          <div className="footer-effect">
            <img src="/img/footer.png" alt="footer-img"></img>
          </div>
          <div className='footer'>
            <div className="container footer-content">
              <div className="copyright">
                <div className="footer-logo">
                  <img src="/img/book.png" alt="logo"></img> The Great Library
                </div>
                Copyright greatlibrary.io 2021-2022. <br/>
                All rights reserved.
              </div>
              <div className="social-area">
                <a href="https://github.com/GtLibrary/"><div className="social-icon-git"><GithubIcon /></div></a>
                <a href="#"><div className="social-icon"><TwitterIcon /></div></a>
                <a href="#"><div className="social-icon"><LinkIcon /></div></a>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Footer;