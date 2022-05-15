import { forwardRef } from "react";

const MainBanner= (props, ref) => {
    return (
        <section className="section main-banner" ref={ref}>
            <div className="container">
                <div className="copy-content" data-aos="fade-up">
                    <h1 className="copy-heading">
                        We’re architects who design places, spaces and experiences
                    </h1>
                </div>
                <div className="image-frame">
                    <img src={props.mainImg} alt="Main banner" loading="lazy"/>
                </div>
                <div
                    className="copy-content"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1200">
                    <p>
                        From hospitality to public spaces to residential buildings and more, our designs are always functional, beautiful and sustainable – made with their users and nature in mind. We believe that simple is beautiful – especially when it’s done responsibly with respect for people and the environment. So we boldly innovate with each client to build unique and lasting experiences that have a positive impact on people, nature and business.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default forwardRef(MainBanner);