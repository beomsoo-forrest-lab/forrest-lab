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
                <div className="copy-content">
                    <h1 className="copy-heading">
                        Project
                    </h1>
                    <p className="copy-body">
                        A responsible and humane approach makes projects meaningful and helps them move forward.
                    <br/><br/>
                        The architect's determination, vision and understanding of the technical and economic aspects of construction help to carry out the projects.
                    </p>
                </div>
                <div className="content-masonry">
                    {listBlocks}
                </div>
            </div>

            <div className={popup ? "popup popup-open" : "popup"} onClick={
                ()=>{clickPopup();}}>
                    <div className="image-content">
                        <img src="" ref={popupImgRef} loading="lazy"/>
                    </div>
            </div>
        </section>
    );
};

export default forwardRef(Masonry);