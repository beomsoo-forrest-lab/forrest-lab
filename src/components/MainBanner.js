import React, { forwardRef } from "react";

const MainBanner = (props, ref) => {
    return (
        <section className="section main-banner" ref={ref}>
            <div className="container">
                <div 
                    className="copy-content"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000">
                    <p className="copy-body">
                        Our work is characterized by a strong interest in the way different materials naturally behave. Yet, we are also fascinated by the possibility of experimenting with new techniques to find innovative solutions. Our work is about venturing into the borderline and finding the edge. It is about identifying possibilities in the place where an understanding of tradition meets an open attitude towards the new. For us, peripheral architecture is about a space and a moment of transition, of having been something and of being about to become something more.
                    </p>
                </div>
            </div>
            <img src={props.mainImg} className="background-image" alt="main banner"/>
        </section>
    )
}

export default forwardRef(MainBanner);