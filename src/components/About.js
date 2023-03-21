import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-section">
        <Container>
            <Row>
                <Col md={12} lg={4} xl={6}></Col>
                <Col md={12} lg={8} xl={6}>
                    <div className="about-body">
                        <div className="about-title">What’s <br />The Great Library? </div>
                        <div className="about-content">It`s a community of readers, authors, and artists. The Great Library is a free-access platform that allows authors to share their works with readers. Unlike Patreon, The Great Library does not have a subscription or traditional payment system, but uses WEB3 tokens to mediate access to the art, books, games, illustrations, etc. It also curates works to ensure quality and relevancy, which is something that Patreon does not do. Additionally, The Great Library offers tools for authors to interact with their readers, such as chat and voting, as well as providing analytics to help authors better understand their readers. In addition to art and illustrations, The Great Library includes games and other digital products. </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default About;
