import React from "react";

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
                        <p>
                            <i>
                                <img src={Address_icon} alt="dd" />
                            </i>
                            <span>
                            Helsinki | Mannerheiminaukio 1 00100 Helsinki, Finland
                            </span>
                        </p>
                        <p>
                            <i>
                                <img src={Address_icon} alt="dd" />
                            </i>
                            <span>
                                Seoul | Spaces Gran Seoul, 33 Jong-ro, Seoul, Korea
                            </span>
                        </p>
                    </div>
                    <div className="info-box contact">
                        <p>
                            <i>
                                <img src={Contact_icon} alt="dd" />
                            </i>
                            <span>
                                info@forrestlab.com
                            </span>
                        </p>
                    </div>
                    <div className="info-box copyright">
                        <p>
                            <i>
                                <img src={Copyright_icon} alt="dd" />
                            </i>
                            <span>
                                2022. FORREST LAB all rights reserved
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;