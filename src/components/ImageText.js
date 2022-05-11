import React, { forwardRef } from "react";
import SecondSection from "assets/img/second-img.jpg"

function ImageText(props, ref) {
    return (
        <section className="section image-text" ref={ref}>
            <div className="container">
                <div className="copy-content">
                    <h1 
                    className="copy-heading" 
                    data-aos="fade-up">
                        Forrest lab
                    </h1>
                    <p
                    data-aos="fade-up"
                    data-aos-delay="200">
                        Forrest lab is a partnership of two architects – Puisto and CELT. Puisto and CELT established their office in Finland in 2018. The office is currently located in both, Helsinki, and Seoul.
                        <br /><br />
                        Forrest lab is a progressive and contemporary practice that focuses on architecture and design - from urban planning to buildings, interiors, objects, and products. As an active part of a design process, Pirinen & Salo is involved throughout the whole process, from the first sketch to on-site supervision.
                    </p>
                </div>
                <img src= {SecondSection} />
            </div>
        </section>
    )
}

export default forwardRef(ImageText);