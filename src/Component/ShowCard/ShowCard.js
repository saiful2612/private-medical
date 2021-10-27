import React from 'react';
import { Link } from 'react-router-dom';
import './ShowCard.css';

const ShowCard = (props) => {
    const{name, description, image, cost,benifits, doctor, cabin } = props.desireService || {};
    
    console.log(image);

    return (
        <div className="cardBody pt-5">
            <div className="cardStyle">
                <h1 className="text-center">Our Factilities</h1>
                <h3 className="text-center text-danger">{name}</h3>
                <img src={image} alt="" />
                <h4>Treatment Fee : {cost}</h4>
                <p>{description}</p>
                <p>We offer : <small>{benifits}</small> </p>
                <h4>Specialist Doctor: {doctor}</h4>
                <h4>Number of cabin :{cabin}</h4>
                
                <Link to="/home">Back to Home</Link>
            </div>
        </div>
    );
};

export default ShowCard;