import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-body">
            <div className="text-center m-5 p-2">
                <h1>Most Comprehensive Medicare in Bangladesh</h1>
                <h5 className="text-secondary">MediCARE combines some of the most experienced and skilled superspecialists in the region with advanced facilities to provide comprehensive medical care in Bangladesh.</h5>
            </div>

            <div className="row mx-5 text-center">

                <div className="col-lg-3 box">
                    <img className="img-fluid image" src="./Photos/Patient400x250.jpg" alt="" />
                    <h6 className="mt-2"> 1 lakh+ Patients Treated Every Year</h6>
                </div>

                <div className="col-lg-3 box">
                    <img className="img-fluid image" src="./Photos/hospital400x250.jpg" alt="" />
                    <h6 className="mt-2">  2 State-of-the-art Hospitals </h6>
                </div>

                <div className="col-lg-3 box">
                <   img className="img-fluid image" src="./Photos/district400x250.jpg" alt="" />
                    <h6 className="mt-2">Patients Treated From Over 64 districts</h6>
                </div>

                <div className="col-lg-3 box">
                    <img className="img-fluid image" src="./Photos/treatment400x250.jpg" alt="" />
                    <h6 className="mt-2">12+ Medical Specialties</h6>
                </div>
            </div>

            <div className="text-center m-5 p-2">
                <h3>KEY SPECIALITIES AT MediCARE</h3>
                <p className="text-secondary">At MediCARE, we always strive to provide the best possible medical treatment to our patient aiming to achieve the highest possible success rate.</p>
            </div>
        </div>
    );
};

export default About;