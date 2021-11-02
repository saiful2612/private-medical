import React from 'react';
import './News.css';

const News = () => {
    return (
        <div className="container">
            <div className="row my-3 news justify-content-around">

                <div className="col-lg-3">
                    <div className="text-center card">
                        <img className="img-fluid" src="./Photos/lab500x350.jpg" alt="" />
                        <h5 className="mt-2">New Lab Set Up</h5>
                        <p className="px-2">We have opened a new lab for disease diagnosis more perfectly at cheap cost..</p>
                        <button className="btn btn-primary button-style">Details</button>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="text-center card">
                        <img className="img-fluid" src="./Photos/Operation500x350.jpg" alt="" />
                        <h5 className="mt-2">Operation Instrument</h5>
                        <p className="px-2">We have brought more technogy based operation Instrument...</p>
                        <button className="btn btn-primary button-style">Details</button>
                    </div>
                </div>

                <div className="col-lg-3">

                    <div className="text-center card">
                        <img className="img-fluid" src="./Photos/surgon500x350.jpg" alt="" />
                        <h5 className="mt-2">Foreign Surgons</h5>
                        <p className="px-2">A group of american surgon come our hospital to treatment the poor people at..</p>
                        <button className="btn btn-primary button-style">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;