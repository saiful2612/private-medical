import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Doctor from '../Doctor/Doctor';
import News from '../News/News';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {

    const [services, setServices]=useState([]);
    useEffect(()=>{
        fetch('/fakeData.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='home-body container'>
            <Banner></Banner>
            <h1 className="text-center py-2">Our Cares</h1>
            <div className="row p-3 ">
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
            

            <div className="doctor">
                <h2 className="text-center my-3">Our Renowned Doctor</h2>
                <Doctor></Doctor>
            </div>


            <h2 className="text-center my-3">Latest News</h2>
            <News></News>

        </div>
    );
};

export default Home;