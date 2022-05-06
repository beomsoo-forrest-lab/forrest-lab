import "./css/section01.scss";

import content01 from "assets/img/content01.jpg";
import content02 from "assets/img/content02.jpg";

function Section01() {
    return (    
        <div id = "first-row">
            <div className="container">
                <div className="content content-left" data-aos="fade-up">
                    <img src= {content01} />
                    <div className="description">
                        <p className="title">Lorem Ipsum</p>
                        <p className="more">Learn more</p>
                    </div>
                </div>

                <div className="content content-right"  data-aos="fade-up">
                    <img src= {content02} />
                    <div className="description">
                        <p className="title">Lorem Ipsum</p>
                        <p className="more">Learn more</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section01;