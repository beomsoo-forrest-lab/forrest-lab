import React from "react";
import InfoBlock from "./InfoBlock";

import logo_basic from "assets/img/forrest_lab_logo_basic.svg";
import Address_icon from "assets/img/i_address.svg";
import Contact_icon from "assets/img/i_contact.svg";
import Copyright_icon from "assets/img/i_copyright.svg";

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="logo">
                    <img src= { logo_basic } alt="dd" />
                </div>
                <div className="info">
                    <div className="info-box address">
                        <InfoBlock img={Address_icon} alt={"Address icon"} content={"Helsinki | Mannerheiminaukio 1 00100 Helsinki, Finland"}/>
                        <InfoBlock img={Address_icon} alt={"Address icon"} content={"Seoul | Spaces Gran Seoul, 33 Jong-ro, Seoul, Korea"}/>
                    </div>
                    <div className="info-box contact">
                        <InfoBlock img={Contact_icon} alt={"Contact icon"} content={"info@forrestlab.com"}/>
                    </div>
                    <div className="info-box copyright">
                        <InfoBlock img={Copyright_icon} alt={"Copyright icon"} content={"2022. FORREST LAB all rights reserved"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;