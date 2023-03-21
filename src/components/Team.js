import React from "react";
import Container from "react-bootstrap/Container";
import "../styles/Team.css"
  
const Team = () => {
    return (
        <div className="team-area">
            <Container>
                <div className="row teamarea-body" data-aos="fade-up">
                    <div className="col-md-12">
                        <p className="team-title">Team</p>
                    </div>
                </div>

                <div className="row team-member-area">

                    <div className="col-md-6">
                        <div className="team-member-item" data-aos="fade-right">
                            <div className="team-member-avatar">
                                <img src="/img/jp-medium.png" width="300" height="300" alt="team member avatar"></img>
                            </div>
                            <h3 className="member-title">Jason Palmer</h3>
                            <p className="member-description">Jason Palmer – Chief Executive Officer: An MBA graduate, and a former musician, Jason has a deep understanding of business process and negotiation. His background is in managing a portfolio of vendors and controlling overall business spend, while ensuring vendors are paid promptly and agreed upon contractual obligations are met. A hands-off leader, Jason thrives when he ensures his best folks have the freedom to do their best work.</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="team-member-item" data-aos="fade-right">
                            <div className="team-member-avatar">
                                <img src="/img/kn-medium.png" width="300" height="300" alt="team member avatar"></img>
                            </div>
                            <h3 className="member-title">Kazuya Nomura</h3>
                            <p className="member-description">Kazuya Nomura – Lead Developer: Kazuya has worked in several kinds of blockchain applications for 5 years and web apps for 8 years. As a creative & passionate developer or a lead developer, and fast learner with details and high quality, he is always trying to improve development and team communication processes.</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="team-member-item" data-aos="fade-right">
                            <div className="team-member-avatar">
                                <img src="/img/lk-medium.png" width="300" height="300" alt="team member avatar"></img>
                            </div>
                            <h3 className="member-title">Leon Kanei</h3>
                            <p className="member-description">Leon Kanei is a Full-Stack Web Developer at The Great Library. With over 5 years of experience in creating cohesive and engaging experiences for clients, Leon is skilled in Javascript/Typescript, Web3/Ethers, Solidity, React.js, and more. He has worked on a range of projects, including decentralized yield farming protocols, NFT yield farming platforms, and financial data companies. In his free time, Leon enjoys gaming, photography, climbing, and camping.</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="team-member-item" data-aos="fade-right">
                            <div className="team-member-avatar">
                                <img src="/img/cb-medium.png" width="300" height="300" alt="team member avatar"></img>
                            </div>
                            <h3 className="member-title">Collin Brown</h3>
                            <p className="member-description">Collin Brown – Lead Unity Developer: With over 8 years of cooperative and independent development experience, Collin has developed many complex games, a variety of applications, platforms, and software titles. His background covers a wide variety of software technologies, not the least of which are Blockchain and Unity Development. He has worked as a Senior Game and Blockchain Developer for Zomfi, Crypto Racing, and MarketMaking Pro. His personal projects include Age of Kingdom, a battle strategy game where users can play with millions of online players from all over the world, and Critical Ops, a 3D Multiplayer FPS game which features competitive combat, beautiful maps, and several game modes.  </p>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="team-member-item" data-aos="fade-right">
                            <div className="team-member-avatar">
                                <img src="/img/ah-medium.webp" width="300" height="300" alt="team member avatar"></img>
                            </div>
                            <h3 className="member-title">Akira Humada</h3>
                            <p className="member-description">Akira Humada – Smart Contract Developer: Akira is a senior blockchain engineer, with many years of experience and talent skill. He was born in Japan. He has 6+ years of experience in web development and 5+ years of experience in Blockchain development giving his deep knowledge about the web and smart contracts. After graduation, he entered several regular companies in Japan & Canada. He has worked on Flow, Algorand, Ethereum, CosWasm, Substrate, Polkadot and Solana technology. In 2017, he focused on blockchain technology and started to research it.</p>
                        </div>
                    </div>

	            <p className="team-title">Authors</p>

                    <div className="col-md-6">
                        <div className="team-member-item" data-aos="fade-right">
                            <div className="team-member-avatar">
                                <img src="/img/jrr-medium.jpg" width="300" height="300" alt="team member avatar"></img>
                            </div>
                            <h3 className="member-title">John R Raymond</h3>
                            <p className="member-description">John R Raymond is the author of the Scarab Cycle. His background in Byzantine Agreement and cryptography lead him to create The Great Library when it became clear to him that the publishing industry was ripe for a shake up. He is currently the Head Librarian with The Great Library and, when not busy with his own books, he works with others editing theirs. He likes both cats and dogs and supports the arts in whatever form they take.</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="team-member-item" data-aos="fade-left">
                            <div className="team-member-avatar">
                                <img src="/img/ls-medium.png" width="300" height="300" alt="team member avatar"></img>
                            </div>
                            <h3 className="member-title">Lawrence Stanley</h3>
                            <p className="member-description">Lawrence Stanley works as a scientist and engineer and has struggled all his life to reconcile his knowledge of geology, astronomy, biology and genetics with his religious heritage and personal experience.  He undertook a quest to find the answer, even if it meant losing his faith, or turning his back on science, depending on what he found.  He has studied many scientific and sacred texts.  His startling conclusion is both are correct ways of looking at the world. They are in agreement and complementary.  He undertook writing a series of novels, designed to entertain, and perhaps to heal the wounds resulting from centuries of condemnation on both sides. The world has too much hate and suspicion. That changes today.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12" data-aos="fade-up">
                        <button className="btn btn-lg btn-contactus">Contact Us</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Team;
