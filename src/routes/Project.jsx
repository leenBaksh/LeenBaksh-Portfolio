import React from "react";


import Navbar from "../components/Navbar";
import ProImg2 from "../components/ProImg2";
import Footer from "../components/Footer";
import PricingsCard from "../components/PricingsCard";
import Works from "../components/Works";


function Project() {
    return (
        <div>
            <Navbar />
            <ProImg2 heading="PROJECT." text="Some of my most recent works" />
            <Works />
            <PricingsCard />
            <Footer />
        </div>
    );
}

export default Project;