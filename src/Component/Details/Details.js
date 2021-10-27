import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ShowCard from '../ShowCard/ShowCard';

const Details = () => {

    const{detailsId}=useParams();

    const[product, setProduct]=useState([]);

    // https://saiful2612.github.io/jsonapi/fakeData.json

    useEffect(()=>{
        fetch('/fakeData.json')
        .then(res => res.json())
        .then(data =>setProduct(data))
    },[])

    const desireService = product.find( item =>  ( item.id == detailsId));

   

    return (
        <div>
            <ShowCard desireService={desireService}></ShowCard>
        </div>
    );
};

export default Details;