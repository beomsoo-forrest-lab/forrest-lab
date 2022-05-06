import { AOS } from "aos";

import React from "react";
import "./css/second-section.scss";

function SecondSection() {
    return (
        <div id="section-inspiration" data-aos="fade-up">
            <div className="container">
                <div className="box">
                    <div className="text-box">
                        <h1>Forrest lab</h1>
                        <p>
                            Forrest lab is a partnership of two architects – Puisto and CELT. Puisto and CELT established their office in Finland in 2018. The office is currently located in both, Helsinki, and Seoul.

                            Forrest lab is a progressive and contemporary practice that focuses on architecture and design - from urban planning to buildings, interiors, objects, and products. As an active part of a design process, Pirinen & Salo is involved throughout the whole process, from the first sketch to on-site supervision.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSection;