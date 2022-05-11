import React, {useState} from "react";
import { Link } from "react-router-dom";

import Logo_black from "assets/img/logo_black.svg";

const Header = (props) => {
    const [downbar, setDownbar] = useState(false);
    const showDownbar = () => setDownbar(!downbar);

    return (
        <div id="header" className= {downbar ? "header header-blur" : "header"}>
            <div className= {downbar ? "container rolldown" : "container"}>
                <div className="main-navigation">
                    <Link to="/home">
                        <img src = { Logo_black } loading="lazy"/>
                    </Link>

                    <div className="hamburger-button" onClick={showDownbar}>
                        <i className={downbar ? "pattie pattie01 pattie01-rotate" : "pattie pattie01"}></i>
                        <i className={downbar ? "pattie pattie02 pattie02-rotate" : "pattie pattie02"}></i>
                    </div>
                </div>

                <ul className={downbar ? "downbar display" : "downbar"}>
                    <li onClick={() => {props.onHomeClick(); showDownbar(); }}>Home</li>
                    <li onClick={() => {props.onAboutClick(); showDownbar(); }}>About us</li>
                    <li onClick={() => {props.onDoClick(); showDownbar(); }}>What we do</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;