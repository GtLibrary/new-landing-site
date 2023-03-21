import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ContentHeader from "./components/ContentHeader";
import Mission from "./components/Mission";
import About from "./components/About";
import Feature from "./components/Feature";
import RoadmapComponent from "./components/RoadmapComponent";
import Team from "./components/Team";
import FAQ from "./components/Faq";
import SignLetter from "./components/SignLetter";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import AOS from 'aos';
import LoadingOverlay from "react-loading-overlay";
import './App.css';
import 'aos/dist/aos.css';
LoadingOverlay.propTypes = undefined;

function App() {
  const [loading, setLoading ] = useState(true);

  useEffect(() => {
    AOS.init({
      once: true,
      duration : 1500
    });
  }, [])

  useEffect(() => {
    window.addEventListener('load', function() {
      setLoading(false);
    })
  }, [])
  return (
    <div className="App">
      {loading && (
        <div
          style={{
            background: "#00000055",
            width: "100%",
            height: "100%",
            zIndex: "1000",
            position: "fixed",
            top: 0,
          }}
        >
          <LoadingOverlay
            active={true}
            spinner
            text="Loading ..."
            styles={{
              overlay: (base) => ({
                ...base,
                background: "rgba(255, 255, 255)",
                position: "absolute",
                marginTop: "30%",
              }),
            }}
            fadeSpeed={9000}
          ></LoadingOverlay>
        </div>
      )}
      <Header />
      <ContentHeader />
      <Mission />
      <Divider />
      <About />
      <Divider />
      <Feature />
      <Divider />
      <RoadmapComponent />
      <Divider />
      <Team />
      <Divider />
      <FAQ />
      <Divider />
      <SignLetter />
      <Footer />
    </div>
  );
}

export default App;
