import AOS from 'aos';
import {useRef} from "react";

import 'reset.scss';
import 'style.scss';
import 'aos/dist/aos.css';

import Footer from "components/Footer";
import Header from "components/Header";
import MainBanner from "components/MainBanner";
import SecondSection from "components/SecondSection";
import Section01 from "components/Section01";
import Section02 from "components/Section02";

function App() {
  AOS.init({
    disable: false,
    delay : 50,
    duration : 1800,
  });

  const toHome = useRef();
  return (
    <div className="App">
      <Header/>
        <MainBanner value = {toHome}/>
        <SecondSection/>
        <Section01/>
        <Section02/>
        <Section01/>
      <Footer/>
    </div>
  );
}

export default App;