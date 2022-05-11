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

function App() {
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
  ]

  return (
    <div className="main">
      <Header/>
      <MainBanner/>
      <ImageText/>
      <Masonry contents={contents}/>
      <Footer/>
    </div>
  );
}

export default App;