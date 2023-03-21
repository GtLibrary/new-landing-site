import React from "react";
import Atropos from "atropos/react";
import "atropos/atropos.css";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";
import "../styles/Feature.css"

const Feature = () => {
    return (
        <div className="feature-collection">
            <Container>
                <Row>
                    <Col sm={10} md={10} lg={10} xl={10}>
                        <div className="feature-item">
                            <div className="feature-item-logo">
                                <img src="/img/books.png" alt="token logo"></img>
                            </div>
                            <div className="feature-item-body">
                                <div className="feature-item-title">Book Tokens</div>
                                <div className="feature-item-content">The most basic of The Great Library's NFTs are book tokens, which give readers the ability to purchase, transfer, or resale ebooks on the site. Where other ebook formats cannot be resold, all NFTs sold through the site can be resold at any time, and are the only way to achieve true ownership of an ebook.</div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={2} md={2} lg={2} xl={2}></Col>
                </Row>
                <Row>
                    <Col sm={2} md={2} lg={2} xl={2}></Col>
                    <Col sm={10} md={10} lg={10} xl={10}>
                        <div className="feature-item">
                            <div className="feature-item-logo">
                                <img src="/img/bookmark.png" alt="token logo"></img>
                            </div>
                            <div className="feature-item-body">
                                <div className="feature-item-title">Bookmark Tokens</div>
                                <div className="feature-item-content">Bookmark Tokens are Image-NFTs and so much more. Like the Book Tokens, Bookmark Tokens can be bought, sold, and transfered using WEB3 technologies. But beyond pointing to illustrations and images from the books they are associated with, Bookmark Tokens act like properties and can be improved using the site's cryptocurrency. These improvements impact the games as well as the AI capabilities tied to the tokens. Bookmark Tokens build on the Book Tokens to form a complete ecosystem.</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={10} md={10} lg={10} xl={10}>
                        <div className="feature-item">
                            <div className="feature-item-logo">
                                <img src="/img/hardcopy.png" alt="token logo"></img>
                            </div>
                            <div className="feature-item-body">
                                <div className="feature-item-title">Hardcopy Tokens</div>
                                <div className="feature-item-content">Hardcopy versions of the books are limited. The only way to access these limited copies are through the purchase of these burnable Hardcopy Tokens. Once the token is burnt the book will be shipped and the token is then retired and is no longer transferable.</div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={2} md={2} lg={2} xl={2}></Col>
                </Row>
                <Row>
                    <Col sm={2} md={2} lg={2} xl={2}></Col>
                    <Col sm={10} md={10} lg={10} xl={10}>
                        <div className="feature-item">
                            <div className="feature-item-logo">
                                <img src="/img/ccoin.png" alt="token logo"></img>
                            </div>
                            <div className="feature-item-body">
                                <div className="feature-item-title">Culture Coin</div>
                                <div className="feature-item-content">The Great Library is dedicated to preserving and sharing human knowledge. Culture Coin is the lifeblood of the Library. It is a strictly deflationary token with only a limited number in existence. All purchases using Culture Coin burn the token so that those who hold onto the token long term are guaranteed that they own a greater and greater percentage of the coin.</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Feature;