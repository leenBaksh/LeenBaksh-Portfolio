import "./ProImg2Styles.css";

import React, { Component } from "react";

class ProImg2 extends Component {
    render() {

        return (
            <div className="pro-img" >
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
};

export default ProImg2;