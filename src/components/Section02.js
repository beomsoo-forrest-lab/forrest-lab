import "./css/section02.scss";

import content03 from "assets/img/content03.jpg";
import content04 from "assets/img/content04.jpg";


function Section02() {
    return (
        <div id = "second-row">
            <div className="container">
                <div className="content content-left" data-aos="fade-up">
                    <img src= {content03} />
                    <div className="description">
                        <p className="title">Lorem Ipsum</p>
                        <p className="more">Learn more</p>
                    </div>
                </div>

                <div className="content content-right" data-aos="fade-up">
                    <img src= {content04} />
                    <div className="description">
                        <p className="title">Lorem Ipsum</p>
                        <p className="more">Learn more</p>
                    </div>
                </div>
            </div>
        </div>
    )    
}

export default Section02;