import React from "react";
import Container from "react-bootstrap/Container";
// import { Parallax } from "react-scroll-parallax";
import "../styles/SignLetter.css"

const SignLetter = () => {
    return (
        <div className="signletter-area">
            <div className="row newsletter-area" data-aos="fade-up">
                <div className="col-md-6 col-lg-8"></div>
                <div className="col-md-6 col-lg-4">
                    <div className="signup-area">
                        <h2>Sign up to our newsletter</h2>
                        <p>Receive all the latest Library news</p>
                        <div className="mail-area">
                            <input type="text" className="email-input" placeholder="Your email"></input>
                            <button className="btn btn-subscribe" type="button">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignLetter;