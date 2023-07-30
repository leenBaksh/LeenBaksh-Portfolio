import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProImg2 from "../components/ProImg2";
import Form from "../components/Form1";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <ProImg2 heading="CONTACT." text="Lets have a chat" />
            <Form />
            <Footer />
        </div>
    )
}

export default Contact;