import { forwardRef, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from "components/Footer";
import Header from "components/Header";

import MainBanner from "components/MainBanner";
import ImageText from "components/ImageText";
import Masonry from "components/Masonry";

import content01 from "assets/img/content01.jpg";
import content02 from "assets/img/content02.jpg";
import content03 from "assets/img/content03.jpg";
import content04 from "assets/img/content04.jpg";

const App = (props) => {
  AOS.init({
    disable: false,
    duration : 1000,
    delay: 100,
  });

  const contents = [
    {
      id : 1,
      title : "First box",
      desc : "learn more",
      image : content01,
    },
    {
      id : 2,
      title : "second box",
      desc : "learn more",
      image : content02,
    },
    {
      id : 3,
      title : "second box",
      desc : "learn more",
      image : content03,
    },
    {
      id : 4,
      title : "second box",
      image : content04,
    },
    {
      id : 5,
      title : "Fifth box",
      image : content04,
    },
  ];

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const doRef = useRef(null);


  const onHomeClick = () => { homeRef.current.scrollIntoView({behavior : "smooth"}) };
  const onAboutClick = () => { aboutRef.current.scrollIntoView({behavior : "smooth"}) };
  const onDoClick = () => { doRef.current.scrollIntoView({behavior : "smooth"}) };


  return (
    <div className="main">
      <Header 
        onHomeClick = {onHomeClick}
        onAboutClick = {onAboutClick}
        onDoClick = {onDoClick}/>
      <MainBanner ref={homeRef}/>
      <ImageText ref={aboutRef}/>
      <Masonry ref={doRef} contents={contents} />
      <Footer/>
    </div>
  );
};

export default App;