import { AOS } from "aos";

import React from "react";
import "./css/second-section.scss";

function SecondSection() {
    return (
        <div id="section-inspiration" data-aos="fade-up">
            <div className="container">
                <div className="box">
                    <div className="text-box">
                        <h1>Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum, mauris vitae dictum dictum, magna ipsum malesuada ipsum, nec blandit mauris erat eget urna. Proin id euismod magna. Phasellus quis mol</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSection;