import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="our-services-body container">

            <h1 className="text-center my-3">Our Provided Services</h1>

            <div className="row mx-5 text-center">
                <div className="col-lg-4 p-2 cardImage">
                    <img className="img-fluid" src="./Photos/cares600x400.jpg" alt="" />
                    <h5>All types of treatment</h5>
                </div>

                <div className="col-lg-4 p-2">
                    <img className="img-fluid" src="./Photos/lab600x400.jpg" alt="" />
                    <h5>Diagonostic and Pathology Services</h5>
                </div>

                <div className="col-lg-4 p-2">
                    <img  className="img-fluid"src="./Photos/pharmacy600x400.jpg" alt="" />
                    <h5>Pharmacy</h5>
                </div>

                <div className="col-lg-4 p-2">
                    <img className="img-fluid" src="./Photos/checkup600x400.jpg" alt="" />
                    <h5>Medical Checkup</h5>
                </div>

                <div className="col-lg-4 p-2">
                    <img className="img-fluid" src="./Photos/icu600x400.jpg" alt="" />
                    <h5>ICU facilites</h5>
                </div>

                <div className="col-lg-4 p-2">
                    <img className="img-fluid" src="./Photos/ambulance600x400.jpg" alt="" />
                    <h5>Abulance Services 24/7</h5>
                </div>
            </div>
        </div>
    );
};

export default Services;