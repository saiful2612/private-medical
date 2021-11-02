import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ShowCard from '../ShowCard/ShowCard';

const Details = () => {

    const{detailsId}=useParams();

    console.log(detailsId);

    const[product, setProducts]=useState([]);

    // const [cardValue, setCardValue] = useState({});

    // https://saiful2612.github.io/jsonapi/fakeData.json

    useEffect(()=>{
        fetch('/fakeData.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    // console.log(products);

    // useEffect(()=>{

    //     if(products.length>0){
    //         const clickedData = products.find( item => item.id == detailsId);
    //         setCardValue(clickedData);
    //     }
    
    // }
    
    // , [products])


    // console.log(cardValue);

    

    const desireService = product.find( item =>  ( item.id == detailsId));
   
    return (
        <div>
            <ShowCard desireService={desireService}></ShowCard>

            {/* <h2>Name:{cardValue?.name}</h2>
            <img src={cardValue?.image} alt="" /> */}
        </div>
    );
};

export default Details;