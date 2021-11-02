import React from 'react';
import './Doctor.css';

const Doctor = () => {
    return (
        <div className="container doctor-area">
            <div className="row justify-content-between">
                <div className="col-lg-3 my-1 card">
                    <div className="text-center">
                        <img className="img-fluid image" src="./Photos/doctor1500x300.jpg" alt="" />
                        <h6 className="mt-2">Dr. Yarn Booker</h6>
                        <p>Renowned Cardiologist</p>
                    </div>

                </div>

                <div className="col-lg-3 my-1 area card">
                    <div className="text-center">
                        <img className="img-fluid image" src="./Photos/doctor2500x300.jpg" alt="" />
                        <h6 className="mt-2">Dr. RebeCa Harris</h6>
                        <p>Renowned Eye Specialist</p>
                    </div>
                </div>

                <div className="col-lg-3 my-1 area card">
                <div className="text-center">
                    <img className="img-fluid image" src="./Photos/doctor3500x300.jpg" alt="" />
                    <h6 className="mt-2">Dr. Willian Steve</h6>
                    <p>Renowned Darmatologist</p>
                </div>

                </div>

                <div className="col-lg-3 my-1 area card">
                    <div className="text-center">
                        <img className="img-fluid image" src="./Photos/doctor4500x300.jpg" alt="" />
                        <h6 className="mt-2">Dr. Alex Rozer</h6>
                        <p>Renowned Gastroliogist</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Doctor;