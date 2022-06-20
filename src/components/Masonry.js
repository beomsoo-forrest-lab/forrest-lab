import { forwardRef, useRef, useState } from "react";

const Masonry = (props, ref) => {
    const popupImgRef = useRef(null);

    const [popup, setPopup] = useState(false);
    const clickPopup = () => {setPopup(!popup)};

    const listBlocks = props.contents.map((content) => 
        <div
        className="masonry-content"
        data-aos="fade-up"
        key={content.id}>
            <img 
                src={content.image}
                onClick={(e)=>{
                    popupImgRef.current.src = e.target.src;
                    popupImgRef.current.alt = e.target.alt;
                    clickPopup();
                    }}
                alt={content.title}/>
        </div>
    );

    return (
        <section className="section masonry" ref={ref}>
            <div className="container masonry-container">
                <div
                    className="copy-content"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1200">
                    <h1 className="copy-heading">
                        Project
                    </h1>
                    <p className="copy-body">
                        We are a Modular, Building and master planning company specializing in socially and ecologically responsible solutions. Our goal is holistic sustainability which starts with taking care of the environment and produces social value. Our works and expert services cover the landscape as a whole, both built and unbuilt environments, in the countryside and in the city.
                    </p>
                </div>
                <div className="content-masonry">
                    {listBlocks}
                </div>
            </div>

            <div className={popup ? "popup popup-open" : "popup"} onClick={
                ()=>{clickPopup();}}>
                    <img src="" ref={popupImgRef} loading="lazy" alt=""/>
            </div>
        </section>
    );
};

export default forwardRef(Masonry);