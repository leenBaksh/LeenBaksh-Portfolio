import { Link } from "react-router-dom";
import "./PricingsCardStyles.css";



import React from "react";

const PricingsCard = () => {
    return (
        <div className="pricing">
            <div className="card-container">
                <div className="card">
                    <h3>-- Basic --</h3>
                    <span className="bar"></span>
                    <p className="btc"> $ XXX</p>
                    <p>- 4 Days -</p>
                    <p>- 3 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className="button-33">
                        Purchase Now
                    </Link>
                </div>

                <div className="card">
                    <h3>-- Premium --</h3>
                    <span className="bar"></span>
                    <p className="btc"> $ XXX</p>
                    <p>- 3 Days -</p>
                    <p>- 5 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className="button-33">
                        Purchase Now
                    </Link>
                </div>

                <div className="card">
                    <h3>-- Business --</h3>
                    <span className="bar"></span>
                    <p className="btc"> $ XXX</p>
                    <p>- 5 Days -</p>
                    <p>- 8 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact" className="button-33">
                        Purchase Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PricingsCard;