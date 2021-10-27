import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer text-center py-3 row">
                <div className="col-6">
                    <h5>Our Contact no :</h5>
                    <h5>Emergency Phone no :</h5>
                    <h6>Ambulance Service No :</h6>
                </div>
                <div className="col-6">
                    <h5>Address :</h5>
                    <h5>Road No :</h5>
                    <h5>Dhaka-1000</h5>
                </div>

            </div>
        </div>
    );
};

export default Footer;