import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProImg2 from "../components/ProImg2";
import Aboutcontain from "../components/Aboutcontain";

const About = () => {
    return (
        <div>
            <Navbar />
            <ProImg2 heading="ABOUT." text="I'm a friendly Front-End Developer." />
            <Aboutcontain />
            <Footer />
        </div>
    );
};

export default About;