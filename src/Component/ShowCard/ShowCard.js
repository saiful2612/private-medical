import React from 'react';
import { Link } from 'react-router-dom';
import './ShowCard.css';

const ShowCard = (props) => {
    const{name, description, image, cost,benifits, doctor, cabin } = props.desireService || { };
    
    console.log(image);

    return (
        <div className="container cardBody row pt-5">
            <div className="cardStyles text-center text-sm-center col-12 mb-5">
                <h1 className=" headline">Our Factilities</h1>
                <h3 className="">in <span className="text-danger"> {name} </span> unit</h3>
                <img src={image} className="img-fluid card-image" alt="" />
            
                <h4 className="mt-3">Checkup and Service fee : <span className="amount-style">{cost}</span> Taka</h4>
                <p className="px-4">{description}</p>
                <p> <span className="offer-writting">We offer :</span> <small>{benifits}</small> </p>
                <h5>Specialist Doctor : {doctor}</h5>
                <h6>Number of cabin : {cabin}</h6>
                
                <Link to="/home"><button className="btn btn-primary button-style">Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ShowCard;