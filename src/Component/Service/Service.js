import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';




const Service = (props) => {
    const{id, name, image, description}=props.service;

    return (
        <div className="col-lg-3">
            <div className="card card-box">
                
                <img className="card-image p-1 img-fluid" src={image} alt="" />
                
                <div className="text-center card-body">
                    <h5>{name}</h5>
                    <p>{description}</p>
                     <Link to={`/details/${id}`}>
                        <button className="btn btn-primary button-style">Read More</button>
                    </Link> 
                </div>
            </div>
        </div>
    );
};

export default Service;