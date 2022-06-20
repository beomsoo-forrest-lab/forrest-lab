import { forwardRef } from "react";

const Slide = (props, ref) => {

    const businessList = props.contents.map((content) => 
        <div className="business-content">
            <div className="image-content">
                <img src={content.image} alt={content.id}/>
            </div>
            <div className="copy-content">
                <h2 className="copy-sub-heading">
                    {content.title}
                </h2>
                <hr/>
                <p className="copy-small">
                    {content.desc}
                </p>
            </div>
        </div>
    );

    return (
        <section className="section slide" ref={ref}>
            <div className="container slide-container">
                <h1 className="copy-heading">
                    Our Business Areas
                </h1>
                <div className="content-slide">
                    {businessList}
                </div>
            </div>
        </section>
    )
}

export default forwardRef(Slide);