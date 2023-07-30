import { Link } from "react-router-dom";
import "./AboutcontainStyles.css";

import React from "react";
import React0 from "../assets/react0.jpeg";
import React6 from "../assets/react6.jpg";

const Aboutcontain = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>I'm a react font-end-developer.I create
                    responsive secure websites for my clients.</p>
                <Link to="/contact">
                    <button className="button-33">Contact</button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack bottom">
                        <img src={React0} className="img" alt="true" />
                    </div>
                    <div className="img-stack top">
                        <img src={React6} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutcontain;