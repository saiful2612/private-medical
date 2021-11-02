import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container">
            
            <div className="footer text-center py-3 row">
                <h2 className="text-center mt-1 mb-4">Contact</h2>
                <div className="col-lg-6 col-12">
                    <h5>Our Contact no : +880-12345678</h5>
                    <h5>Emergency Phone no :+2-2345-123</h5>
                    <h6>Ambulance Service No :+1-23456</h6>
                </div>
                <br />
                <div className="col-lg-6 col-12">
                    <h5>Address :Dhanmondi</h5>
                    <h5>Road No :12/D</h5>
                    <h5>Dhaka-1000</h5>
                </div>
                <p><small className="mt-3">All rights reserved &copy; MediCARE Hospital</small></p>
            </div>
        </div>
    );
};

export default Footer;