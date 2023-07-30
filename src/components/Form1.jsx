import "./Form1Styles.css";

import React from "react";

const Form1 = () => {
    return (
        <div className="form">
            <form>
                <label>Your Name</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="email"></input>
                <label>Subject</label>
                <input type="text"></input>
                <label>Message</label>
                <textarea rows="5" placeholder="Type Your Message Here" />
                <button className="button-33" >Submit</button>
            </form>
        </div>
    );
};

export default Form1;