import "./ProImgStyles.css";

import React from "react";
import IntroImg from "../assets/girlpic.jpg";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

const ProImg = () => {

    return (
        <div className="Pro">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="IntroImg" />
            </div>
            <div className="content">
                <p>HI, I'M A <br></br>

                    <TypeAnimation
                        repeat={Infinity}
                        wrapper="b"
                        sequence={[
                            'FREELANCER',
                            1000,
                            'WEB DEVELOPER ',
                            1000,
                            'PRESENTATION DESIGNER',
                            1000,
                            'GRAPHIC DESIGNER',
                            1000,
                        ]}
                    />
                </p>
                <h1> Stack Mern Developer </h1>
                <div>
                    <Link to="/proect" className="button-33">Projects</Link>
                    <Link to="/contact" className="button-33 button-light">Contact</Link>
                </div>
            </div>
        </div>
    )
};

export default ProImg;
