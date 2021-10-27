import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {

    const [services, setServices]=useState([]);
    useEffect(()=>{
        fetch('/fakedata.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='row'>
           <Banner/> 
            <h2 className="text-center py-3">Special Cares</h2>
            {
                services.map((service,index) => <Service service={service} key={index}/>)
            }
            <h3>Our Renowned Doctor</h3>
        </div>
    );
};

export default Home;