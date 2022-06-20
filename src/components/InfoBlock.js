const InfoBlock = (props) => {
    return (
        <p className="content">
            <i>
                <img src={props.img} alt={props.alt} />
            </i>
            <span>
                {props.content}
            </span>
        </p>      
    )
};

export default InfoBlock;