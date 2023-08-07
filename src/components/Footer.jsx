import "./FooterStyles.css";

import React from "react";
import { BiLogoGmail, BiPhone } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedin, FaMailBulk, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <h4>About the Company</h4>
                    <p>This is me Sandleen Waseem.<br></br>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Sit amet tellus cras adipiscing enim eu turpis.
                        Id donec ultrices tincidunt arcu non. Tristique nulla aliquet
                        enim tortor at auctor urna. </p>
                </div>


                <div className="Right">
                    <div className="Email">
                        <h5><FaMailBulk size={23} style={{ color: "#c2fbd7", marginRight: "1rem" }} /> wdigital085@gmail.com </h5>
                    </div>

                    <div className="Social Media">
                        <a href="https://www.facebook.com/SandalBakshi">
                            < FaFacebook
                                size={23}
                                style={{
                                    color: "#c2fbd7", marginRight:
                                        "1rem"
                                }}
                            />
                        </a>
                        <a href="https://github.com/leenBaksh">
                            <FaGithub
                                size={23}
                                style={{
                                    color: "#c2fbd7", marginRight:
                                        "1rem"
                                }}
                            />
                        </a>

                        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
                            <FaLinkedin
                                size={23}
                                style={{
                                    color: "#c2fbd7", marginRight:
                                        "1rem"
                                }}
                            />
                        </a>

                    </div>
                </div>
            </div>
        </div >
    )
};


export default Footer;