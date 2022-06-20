import { forwardRef } from "react";

import MainBanner from "../components/MainBanner";
import ImageText from "../components/ImageText";
import Slide from "../components/Slide";
import Masonry from "../components/Masonry";

import mainImg from "assets/img/main-img.jpg";
import sustainability from "assets/img/sustainability.png";
import logo_black from "assets/img/forrest_lab_logo_black.svg";

import content01 from "assets/img/content01.jpg";
import content02 from "assets/img/content02.jpg";
import content03 from "assets/img/content03.jpg";
import content04 from "assets/img/content04.jpg";
import content05 from "assets/img/content05.jpg";

const Home = (props) => {
    const businessContents = [
        { title : "Modular Project", desc : "Land use and construction have far-reaching impacts on our living environment. Climate change and biodiversity loss are huge challenges that we are responding to by developing design practices and methods. In addition to expertise, we offer bold insights and practical solutions. Our knowledgeable partners support us in research and development projects.", image : content01, id : 1},
        { title : "Mass-timber Building Project", desc : "Land use and construction have far-reaching impacts on our living environment. Climate change and biodiversity loss are huge challenges that we are responding to by developing design practices and methods. In addition to expertise, we offer bold insights and practical solutions. Our knowledgeable partners support us in research and development projects.", image : content02, id : 2},
        { title : "Master Plan", desc : "Land use and construction have far-reaching impacts on our living environment. Climate change and biodiversity loss are huge challenges that we are responding to by developing design practices and methods. In addition to expertise, we offer bold insights and practical solutions. Our knowledgeable partners support us in research and development projects.", image : content03, id : 3}
    ];

    const masonryContents = [
        { title : "Log house", desc : "2202. 0. 0", image : content01, id : 1},
        { title : "Lake view", desc : "2202. 0. 0", image : content02, id : 2},
        { title : "Lorem Ipsum", desc : "2202. 0. 0", image : content03, id : 3},
        { title : "Lorem Ipsum", desc : "2202. 0. 0", image : content04, id : 4},
        { title : "Lorem Ipsum",desc : "2202. 0. 0", image : content05, id : 5},
        { title : "Lorem Ipsum",desc : "2202. 0. 0", image : content05, id : 5},
        { title : "Lorem Ipsum",desc : "2202. 0. 0", image : content05, id : 5},
        { title : "Lorem Ipsum",desc : "2202. 0. 0", image : content05, id : 5},
        { title : "Lorem Ipsum",desc : "2202. 0. 0", image : content05, id : 5},
        { title : "Lorem Ipsum",desc : "2202. 0. 0", image : content05, id : 5}
      ];

    return(
        <div className="main">
            <MainBanner ref={props.homeRef} mainImg={mainImg} />
            <ImageText ref={props.aboutRef} sustainability={sustainability} logo_black={logo_black}/>
            <Slide ref={props.businessRef} contents={businessContents}/>
            <Masonry ref={props.projectRef} contents={masonryContents} />
        </div>
    );
}

export default forwardRef(Home);