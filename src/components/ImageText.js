import { forwardRef } from "react";

const ImageText= (props, ref) => {
    return (
        <section className="section image-text" ref={ref}>
            <div className="container">
                <div className="image-content">
                    <img src={props.sustainability} alt="sustainable" loading="lazy"/>
                </div>
                <div className="copy-content">
                    <h1 className="copy-heading">
                        Sustainable Hotel &amp; Resort
                    </h1>
                    <p className="copy-body">
                        We are a Modular, Building and master planning company specializing in socially and ecologically responsible solutions. Our goal is holistic sustainability which starts with taking care of the environment and produces social value. Our works and expert services cover the landscape as a whole, both built and unbuilt environments, in the countryside and in the city.
                    </p>
                    <div class="break-logo"
                    data-aos="fade-up"
                    data-aos-duration="1200">
                        <img src={props.logo_black} alt="logo black"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default forwardRef(ImageText);