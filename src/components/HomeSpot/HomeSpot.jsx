import { useEffect, useState } from "react";
import SpotCard from "../AllSpots/SpotCard/SpotCard";

const HomeSpot = () => {
    const [spots, setSpots] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/addspot')
        .then(res=>res.json())
        .then(data=>{
            setSpots(data);
        })
    },[])
    const [spotLength, setSpotLength] = useState(6);
    console.log(spotLength, spots.length)
    return (
        <div className="mt-16">
            <div className="text-center mb-16">
                <h2 className="text-2xl lg:text-5xl font-bold">Tourist Spots</h2>
                <p className="lg:px-80 px-3 leading-7 mt-6">Discover our carefully curated selection of top tourist destinations, tailored to your travel desires. Whether you seek serene landscapes or vibrant cityscapes, our collection promises unforgettable experiences. Start your journey of exploration today.</p>
            </div>
            <div className="mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    spots.slice(0,spotLength).map(spot=><SpotCard key={spots._id} spot={spot}></SpotCard>)
                }
            </div>
            <div className={`flex justify-center mt-8`}>
                <div className={spotLength < spots.length ? 'flex': 'hidden'}>
                    <a onClick={()=>setSpotLength(spots.length)} className="btn w-[300px] text-white text-md bg-[#7eb8fe]">See All Spots</a>
                </div>
           </div>
        </div>
    );
};

export default HomeSpot;