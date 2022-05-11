import { useRef, forwardRef } from "react";

import MainBanner from "../components/MainBanner";
import ImageText from "../components/ImageText";
import Masonry from "../components/Masonry";

import content01 from "assets/img/content01.jpg";
import content02 from "assets/img/content02.jpg";
import content03 from "assets/img/content03.jpg";
import content04 from "assets/img/content04.jpg";

const Home = (props, ref) => {
    const contents = [
        {
          id : 1,
          title : "First box",
          desc : "2202. 0. 0",
          image : content01,
        },
        {
          id : 2,
          title : "second box",
          desc : "2202. 0. 0",
          image : content02,
        },
        {
          id : 3,
          title : "second box",
          desc : "2202. 0. 0",
          image : content03,
        },
        {
          id : 4,
          title : "second box",
          desc : "2202. 0. 0",
          image : content04,
        },
        {
          id : 5,
          title : "Fifth box",
          desc : "2202. 0. 0",
          image : content04,
        },
      ];

    return(
        <div className="warp">
            <MainBanner ref={props.homeRef}/>
            <ImageText ref={props.aboutRef}/>
            <Masonry ref={props.doRef} contents={contents} />
        </div>
    );
}

export default forwardRef(Home);