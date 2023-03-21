import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import "../styles/SignLetter.css"

const SignLetter = () => {
    return (
        <div className="signletter-area">
            <Container>
                <Row>
                    <Col md={12} lg={1}></Col>
                    <Col md={12} lg={10}>
                        <div className="signup-area">
                            <h2>Sign up to our newsletter</h2>
                            <p>Receive all the latest Library news</p>
                            <div className="mail-area">
                                <input type="text" className="email-input" placeholder="Your email"></input>
                                <button className="btn btn-subscribe" type="button">Subscribe</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={1}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignLetter;