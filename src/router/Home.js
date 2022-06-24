import { forwardRef } from "react";

import MainBanner from "../components/MainBanner";
import ImageText from "../components/ImageText";
import Slide from "../components/Slide";
import Masonry from "../components/Masonry";

import mainImg from "assets/img/main-img.jpg";
import sustainability from "assets/img/sustainability.jpg";
import logo_black from "assets/img/forrest_lab_logo_black.svg";

import modular_developer from "assets/img/modular_developer.jpg";
import mass_timber from "assets/img/mass_timber_building.jpg";
import master_plan from "assets/img/master_plan.jpg";

import content01 from "assets/img/content01.jpg";
import content02 from "assets/img/content02.jpg";
import content03 from "assets/img/content03.jpg";
import content04 from "assets/img/content04.jpg";
import content05 from "assets/img/content05.jpg";
import content06 from "assets/img/content06.jpg";
import content07 from "assets/img/content07.jpg";
import content08 from "assets/img/content08.jpg";
import content09 from "assets/img/content09.jpg";
import content10 from "assets/img/content10.jpg";
import content11 from "assets/img/content11.jpg";

const Home = (props) => {
    const businessContents = [
        { title : "Modular Developer", desc : "Land use and construction have far-reaching impacts on our living environment. Climate change and biodiversity loss are huge challenges that we are responding to by developing design practices and methods. In addition to expertise, we offer bold insights and practical solutions. Our knowledgeable partners support us in research and development projects.", image : modular_developer, id : 1},
        { title : "Mass-timber Building Project", desc : "Land use and construction have far-reaching impacts on our living environment. Climate change and biodiversity loss are huge challenges that we are responding to by developing design practices and methods. In addition to expertise, we offer bold insights and practical solutions. Our knowledgeable partners support us in research and development projects.", image : mass_timber, id : 2},
        { title : "Master Plan", desc : "Land use and construction have far-reaching impacts on our living environment. Climate change and biodiversity loss are huge challenges that we are responding to by developing design practices and methods. In addition to expertise, we offer bold insights and practical solutions. Our knowledgeable partners support us in research and development projects.", image : master_plan, id : 3}
    ];

    const masonryContents = [
        { image : content01, id : 1},
        { image : content02, id : 2},
        { image : content03, id : 3},
        { image : content04, id : 4},
        { image : content05, id : 5},
        { image : content06, id : 6},
        { image : content07, id : 7},
        { image : content08, id : 8},
        { image : content09, id : 9},
        { image : content10, id : 10},
        { image : content11, id : 11},
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