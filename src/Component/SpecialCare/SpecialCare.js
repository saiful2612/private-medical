import React from 'react';
import './SpecialCare.css';

const SpecialCare = () => {
    return (
        <div className="container specialCare">
            
            <div className="mt-3">

                <div className="text-center">
                    <img className="img-fluid" src="/Photos/cares600x400.jpg" alt="" />
                </div>
                <div className="care-detail text-center">  
                    <h3 className="care-headline">Our Special Care</h3>                      
                    <div className="">
                        <ul>
                            <li>1 to 1 care</li>
                            <li>Specialist doctor extra care</li>
                            <li>All types fee are discounted for our Health Card</li>
                            <li>Emergency Home Care</li>
                            <li>All types fee are discounted for our Health Card</li>
                        </ul>
                    </div>
                   
                </div>
            
            </div>
        </div>
    );
};

export default SpecialCare;