const Masonry = props => {
    const listBlocks = props.contents.map((content) => 
        <div
        className="masonry-content masonry-content-left"
        data-aos="fade-up"
        key={content.id}>
            <img src={content.image} />
            <div className="desc">
                <p className="place">{content.title}</p>
                <p className="learn-more">{content.desc}</p>
            </div>
        </div>
    );

    return (
        <section className="section masonry">
            <div className="container masonry-container">
                {listBlocks}
            </div>
        </section>
    );
}

export default Masonry;