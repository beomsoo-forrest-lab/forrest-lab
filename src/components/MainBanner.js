import React, {useRef} from "react";
import "./css/main-banner.scss"

function MainBanner(props) {
    return (
        <div id="main-banner">
            <div className="banner-container">
                <div className="text-box" data-aos="fade-up">
                    <h1>We’re architects who design places, spaces and experiences.</h1>
                    <p>From hospitality to public spaces to residential buildings and more, our designs are always functional, beautiful and sustainable – made with their users and nature in mind. We believe that simple is beautiful – especially when it’s done responsibly with respect for people and the environment. So we boldly innovate with each client to build unique and lasting experiences that have a positive impact on people, nature and business.</p>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;