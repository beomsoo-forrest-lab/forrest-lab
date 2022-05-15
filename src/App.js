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
  const doRef = useRef(null);

  const onHomeClick = () => { homeRef.current.scrollIntoView({behavior : "smooth"}) };
  const onAboutClick = () => { aboutRef.current.scrollIntoView({behavior : "smooth"}) };
  const onDoClick = () => { doRef.current.scrollIntoView({behavior : "smooth"}) };

  return (
    <div className="warp">
      <Header 
        onHomeClick = {onHomeClick}
        onAboutClick = {onAboutClick}
        onDoClick = {onDoClick}
        homeRef={homeRef}/>
        <Routes>
          <Route
            exact path="/"
            element={
              <Home 
                homeRef={homeRef}
                aboutRef={aboutRef}
                doRef={doRef}/>}/>
          <Route path="/notfound" component={NotFound}/>
        </Routes>
      <Footer/>
    </div>
  );
};

export default App;