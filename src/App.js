import { Routes, Route } from 'react-router-dom';
import { useRef } from "react";
import AOS from 'aos';

import "style.scss";
import 'aos/dist/aos.css';

import Footer from "components/Footer";
import Header from "components/Header";

import Home from "router/Home";
import NotFound from "router/NotFound";

const App = () => {
  AOS.init({
    disable: false,
    duration : 1000,
    delay: 100,
  });

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const businessRef = useRef(null);
  const projectRef = useRef(null);

  const onHomeClick = () => { homeRef.current.scrollIntoView({behavior : "smooth"}) };
  const onAboutClick = () => { aboutRef.current.scrollIntoView({behavior : "smooth"}) };
  const onBusinessClick = () => { businessRef.current.scrollIntoView({behavior : "smooth"}) };
  const onProjectClick = () => { projectRef.current.scrollIntoView({behavior : "smooth"}) };

  return (
    <div className="warp">
      <Header 
        onHomeClick = {onHomeClick}
        onAboutClick = {onAboutClick}
        onBusinessClick = {onBusinessClick}
        onProjectClick = {onProjectClick}/>
        <Routes>
          <Route
            exact path="/"
            element={
              <Home 
                homeRef={homeRef}
                businessRef={businessRef}
                aboutRef={aboutRef}
                projectRef={projectRef}/>}/>
          <Route path="/notfound" component={NotFound}/>
        </Routes>
      <Footer/>
    </div>
  );
};

export default App;