import React from "react";
import InfoBlock from "./InfoBlock";

import logo_basic from "assets/img/forrest_lab_logo_black.svg";
import Address_icon from "assets/img/i_address.svg";
import Contact_icon from "assets/img/i_contact.svg";
import Copyright_icon from "assets/img/i_copyright.svg";
import Instagram_icon from "assets/img/i_instagram.svg";

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="info-content">
                    <div className="logo">
                        <img src= { logo_basic } alt="dd" />
                    </div>
                    <div className="info">
                        <InfoBlock img={Address_icon} alt={"Address icon"} content={"Helsinki | Finland"}/>
                        <InfoBlock img={Address_icon} alt={"Address icon"} content={"Seoul | Korea"}/>
                        <InfoBlock img={Contact_icon} alt={"Contact icon"} content={"info@forrest-lab.com"}/>
                    </div>
                </div>
                <div className="copyright-content">
                    <p className="content">
                        <a href="https://www.naver.com/" target="_blank">
                            <i>
                                <img src={Instagram_icon} alt="copyright" />
                            </i>
                        </a>

                        <hr/>

                        <i className="copyright-icon">
                            <img src={Copyright_icon} alt="copyright" />
                        </i>
                        <span>
                            2022. FORREST LAB all rights reserved
                        </span>

                        <hr/>

                        <span>
                            B&amp;R group
                        </span>
                    </p>      
                </div>
            </div>
        </div>
    )
}

export default Footer;