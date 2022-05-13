import { forwardRef, useRef, useState } from "react";

const Masonry = (props, ref) => {
    const popupImgRef = useRef(null);

    const [popup, setPopup] = useState(false);
    const clickPopup = () => {setPopup(!popup)};

    const listBlocks = props.contents.map((content) => 
        <div
        className="masonry-content masonry-content-left"
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
            <div className="desc">
                <p className="place">{content.title}</p>
            </div>
        </div>
    );

    return (
        <section className="section masonry" ref={ref}>
            <div className="container masonry-container">
                {listBlocks}
            </div>

            <div className={popup ? "popup popup-open" : "popup"} onClick={
                ()=>{clickPopup();}}>
                    <img src="" ref={popupImgRef} loading="lazy" alt=""/>
            </div>
        </section>
    );
};

export default forwardRef(Masonry);