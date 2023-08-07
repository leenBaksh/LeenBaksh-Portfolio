import "./ProImgStyles.css";

import React from "react";

import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

const ProImg = () => {

    return (
        <div className="Pro">
            <div className="mask">
            </div>
            <div className="content">
                <p>I'M </p>
                <h1 style={{ color: "pink" }}> SANDLEEN WASEEM </h1>
                <p>I'M A </p>


                <h1 style={{ color: "#c2fbd7" }}>
                    <TypeAnimation
                        repeat={Infinity}
                        wrapper="b"
                        sequence={[
                            'FREELANCER ',
                            1000,
                            'WEB DEVELOPER ',
                            1000,
                            'Coder ',
                            1000,
                            'PRESENTATION DESIGNER',
                            1000,
                            'GRAPHIC DESIGNER',
                            1000,
                        ]}
                    />
                </h1>

                <p>I am a web designer,web developer ,Graphic Designer and Presentation Designer.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                    Sit amet tellus cras adipiscing enim eu turpis.</p>
                <div>
                    <Link to="/proect" className="button-33">Projects</Link>
                    <Link to="/contact" className="button-33 button-light">Contact</Link>
                </div>
            </div>
        </div >
    )
};

export default ProImg;
