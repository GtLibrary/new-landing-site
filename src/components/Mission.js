import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import "../styles/Mission.css";

const Mission = () => {
  return (
    <div className="content-mission">
        <Container>
            <Row>
                <Col>
                    <div className="mission-body">
                        <div className="mission-title">Our Mission</div>
                        <div className="mission-content">The Great Library is a platform for digital goods and services. Our goal is to provide authors and creators the highest royalties possible while at the same time lowering the barrier to entry for new and up and coming names. Where Amazon and other publishing houses take upwards of 75 percent, The Great Library sees that content creators receive 95% for all digital products and downloads and up to 10% of all resales. Our goal is to enable creators to continually improve their works so that the value of holding any of the tokens on the site is an attractive proposition. Our KAIZEN approach means new art and illustrations as well as improvements to the texts are always forthcoming. Join us at Great Library and watch our books and products come alive. </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default Mission;
