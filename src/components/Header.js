import React, {useState} from "react";

import symbol_black from "assets/img/forrest_lab_symbol_black.svg";

const Header = (props) => {
    const [dropMenu, setDropMenu] = useState(false);
    const showDropMenu = () => setDropMenu(!dropMenu);

    return (
        <div id="header" className= {dropMenu ? "header header-rolldown-blur" : "header"}>
            <div className= {dropMenu ? "container header-container rolldown" : "container header-container"}>
                <div className="main-navigation">
                    <div className="header-logo" onClick={props.onHomeClick}>
                        <img src = {symbol_black} loading="lazy" alt="symbol"/>
                    </div>

                    <div className="hamburger-button" onClick={showDropMenu}>
                        <i className={dropMenu ? "pattie pattie-rotate" : "pattie"}></i>
                        <i className={dropMenu ? "pattie pattie-rotate" : "pattie"}></i>
                        <i className={dropMenu ? "pattie pattie-rotate" : "pattie"}></i>
                        <i className={dropMenu ? "pattie pattie-rotate" : "pattie"}></i>
                    </div>
                </div>

                <ul className={dropMenu ? "drop-menu show-drop-menu" : "drop-menu"}>
                    <li onClick={() => {props.onHomeClick(); showDropMenu(); }}>Home</li>
                    <li onClick={() => {props.onAboutClick(); showDropMenu(); }}>About us</li>
                    <li onClick={() => {props.onBusinessClick(); showDropMenu(); }}>Business</li>
                    <li onClick={() => {props.onProjectClick(); showDropMenu(); }}>Project</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;