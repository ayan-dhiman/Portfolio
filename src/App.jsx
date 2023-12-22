import "./App.scss";
import React, { useState, useEffect } from 'react';

import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Sidenav from './components/sidenav/Sidenav';
import Hire from './components/hire/Hire';

import backgroundImageWhite from '../src/assets/images/BackgroundImageWhite.jpg';
import backgroundImageBlack from '../src/assets/images/BackgroundImageBlack.png';


function App() {

  const [backgroundImage, setBackgroundImage] = useState(backgroundImageWhite);
  
  const [isSidebarVisible, setIsSidebarVisible] = useState(window.innerWidth >= 1000);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };

  const handleResize = () => {
    setIsSidebarVisible(window.innerWidth >= 1000);
  };

  useEffect(() => {

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`App ${isSidebarVisible ? "" : "hide-sidebar"}`} style={backgroundStyle}>
      <Header/>

      <div className="page">
      {isSidebarVisible && (
        <div className="sidebar">
          <Sidenav/>
        </div>
        )}

        <div className={`sections ${isSidebarVisible ? "sections-with-sidebar" : ""}`}>
          <Intro/>
          <About/>
          <Projects/>
          <Hire/>
        </div>
      </div>
    </div>
  );
}

export default App;
