import React, { useRef, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import "../styles/Roadmap.css";

const RoadmapComponent = () => {
  const markRef = useRef();
  const componentRef = useRef();
  const [width, setWidth] = useState(0);
  const [currenttop, setcurrenttop] = useState();
  // This function calculate X and Y
  const getPosition = () => {
    const top = componentRef.current.offsetTop;
    setcurrenttop(top);
  };

  // Get the position of the red box in the beginning
  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    
    window.addEventListener("resize", handleResize)
    
    handleResize()
    
    return () => { 
      window.removeEventListener("resize", handleResize)
    }
  }, [setWidth]);

  useEffect(() => {
      const path = document.getElementById('roadline');
      const pathLength = path.getTotalLength();
      const currentDivTop = currenttop;
      path.style.strokeDasharray = pathLength + ', ' + pathLength;
      path.style.strokeDashoffset = pathLength;
      path.getBoundingClientRect();
      window.addEventListener("scroll", function (e) {
          const scrollPercentage = (document.documentElement.scrollTop - currentDivTop) / pathLength * 2;
          // const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 10.9;
          
          const drawLength = pathLength * scrollPercentage;
          path.style.strokeDashoffset = pathLength - drawLength;
          // console.log(drawLength, pathLength, currentDivTop, scrollPercentage)
          // if (scrollPercentage >= 0.99) {
          //     path.style.strokeDasharray = "none";
          // } else {
          //     path.style.strokeDasharray = pathLength + ', ' + pathLength;
          // }
      });
  })
  return (//
    <div className="faq-area" ref={componentRef}>
      { width > 768 ? (
        <div className="roadmap" data-aos="fade-up">
          <h2 className="roadmap-title">Road Map</h2>
          <div className="roadmap-content">
            <div className="roadmap-line">
              <svg width="631" height="1882" viewBox="0 0 631 1882" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="roadline" ref={markRef} d="M433.941 0V250.036C424.12 354.486 146.911 461.232 64.4028 461.232C-18.1056 461.232 -10.1045 378.748 31.8995 373.355C112.408 363.019 96.8578 434.529 105.407 496.188C115.143 566.408 221.89 544.673 223.891 644.319C223.928 646.168 223.662 648.086 223.156 649.865C183.795 788.463 150.111 925.781 568.452 913.239C640.959 913.239 644.959 817.109 598.455 799.145C552.157 781.261 497.001 805.833 488 884C468.831 964.918 424 1208 336 1289C163 1414 226.663 1752.02 268 1881" stroke="#EAC94D" strokeWidth="3" strokeLinejoin="round" strokeDasharray="20 20"/>
                  <path fill="#14120B" d="M194 1529a30 30 0 1 0 60 0a30 30 0 1 0 -60 0" />
                  <path fill="#EAC94D" d="M210 1529a14 14 0 1 0 28 0a14 14 0 1 0 -28 0" />
                  <path fill="#14120B" d="M404 1081a30 30 0 1 0 60 0a30 30 0 1 0 -60 0" />
                  <path fill="#EAC94D" d="M420 1081.3a14 14 0 1 0 28 0a14 14 0 1 0 -28 0" />
                  <path fill="#14120B" d="M194 662a30 30 0 1 0 60 0a30 30 0 1 0 -60 0" />
                  <path fill="#EAC94D" d="M210 662a14 14 0 1 0 28 0a14 14 0 1 0 -28 0" />
                  <path fill="#14120B" d="M404 168a30 30 0 1 0 60 0a30 30 0 1 0 -60 0" />
                  <path fill="#EAC94D" d="M420 168a14 14 0 1 0 28 0a14 14 0 1 0 -28 0" />
              </svg>
            </div>
            <div className="roadmap-item1">
              <div className="rm-item-content">
                <img src="/img/circle.png" alt="quater1"></img>
                <span className="img-toptitle">2022</span>
                <h3>2022</h3>
                <p>Development of novel smart contracts and growth of The Great Library team from two people to ten after the launch of the legacy site.</p>
              </div>
            </div>
            <div className="roadmap-item2">
              <div className="rm-item-content">
                <img src="/img/circle.png" alt="quater1"></img>
                <span className="img-toptitle">2023</span>
                <h3>2023</h3>
                <p>Initial Coin Offering (ICO) of Culture Coin and launch of the Library's validated network. Implementation of revenue-generating AI-based author tools.</p>
              </div>
            </div>
            <div className="roadmap-item3">
              <div className="rm-item-content">
                <img src="/img/circle.png" alt="quater1"></img>
                <span className="img-toptitle">2024</span>
                <h3>2024</h3>
                <p>Launch of the first Smart Book with integrated game and start of the Library's population.</p>
              </div>
            </div>
            <div className="roadmap-item4">
              <div className="rm-item-content">
                <img src="/img/circle.png" alt="quater1"></img>
                <span className="img-toptitle">2025</span>
                <h3>2025</h3>
                <p>Signing of the first publishing house and import of their IP. Mass marketing of The Great Library's integrated properties.</p>
              </div>
            </div>
          </div>
        </div>
      ): (
        <div className="roadmap" data-aos="fade-up">
          <h2 className="roadmap-title">Road Map</h2>
          <div className="roadmap-content">
            <div className="roadmap-line">
              <svg width="631" height="1882" viewBox="0 0 631 1882" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="roadline" ref={markRef} d="M479.834 0V281.291C469.776 473.625 181.819 435 88.9975 435C-3.82446 435 16.4701 326.571 66.4976 349.5C138.498 382.5 65.2196 441 36.4976 514.5C11.2925 579 51.5016 670.5 25.9976 747C16.9047 795 -29.7731 944.307 443.898 930.106C488.901 930.106 537.522 888.506 511.401 838.875C500.151 817.5 417.809 788.413 405.651 894C396.176 976.288 570.498 1245.38 471.498 1336.5C434.748 1374 302.943 1327.34 145.251 1371.75C-38.5 1423.5 19.9997 1702.5 129.5 1860" stroke="#EAC94D" strokeWidth="3.375" strokeLinejoin="round" strokeDasharray="22.5 22.5" />
                  <path fill="#14120B" d="M446.152 1124.25a33.75 33.75 0 1 0 67.5 0a33.75 33.75 0 1 0 -67.5 0" />
                  <path fill="#EAC94D" d="M464.152 1124.59a15.75 15.75 0 1 0 31.5 0a15.75 15.75 0 1 0 -31.5 0" />
                  <path fill="#14120B" d="M0.2773 650.25a33.75 33.75 0 1 0 67.5 0a33.75 33.75 0 1 0 -67.5 0" />
                  <path fill="#EAC94D" d="M18.2773 650.25a15.75 15.75 0 1 0 31.5 0a15.75 15.75 0 1 0 -31.5 0" />
                  <path fill="#14120B" d="M446.152 177.75a33.75 33.75 0 1 0 67.5 0a33.75 33.75 0 1 0 -67.5 0" />
                  <path fill="#EAC94D" d="M464.152 177.75a15.75 15.75 0 1 0 31.5 0a15.75 15.75 0 1 0 -31.5 0" />
              </svg>
            </div>
            <div className="roadmap-item1">
              <div className="rm-item-content">
                <img src="/img/circle.png" alt="quater1"></img>
                <span className="img-toptitle">2022</span>
                <h3>2022</h3>
                <p>Development of novel smart contracts and growth of The Great Library team from two people to ten after the launch of the legacy site.</p>
              </div>
            </div>
            <div className="roadmap-item2">
              <div className="rm-item-content">
                <img src="/img/circle.png" alt="quater1"></img>
                <span className="img-toptitle">2023</span>
                <h3>2023</h3>
                <p>Initial Coin Offering (ICO) of Culture Coin and launch of the Library's validated network. Implementation of revenue-generating AI-based author tools.</p>
              </div>
            </div>
            <div className="roadmap-item3">
              <div className="rm-item-content">
                <img src="/img/circle.png" alt="quater1"></img>
                <span className="img-toptitle">2024</span>
                <h3>2024</h3>
                <p>Launch of the first Smart Book with integrated game and start of the Library's population.</p>
              </div>
            </div>
            <div className="roadmap-item4">
              <div className="rm-item-content">
                <img src="/img/circle.png" alt="quater1"></img>
                <span className="img-toptitle">2025</span>
                <h3>2025</h3>
                <p>Signing of the first publishing house and import of their IP. Mass marketing of The Great Library's integrated properties.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoadmapComponent;
