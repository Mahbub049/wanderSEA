import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SpotCard from "../AllSpots/SpotCard/SpotCard";
import CountrySpotCards from "./CountrySpotCards/CountrySpotCards";

const CountryRoute = () => {
    const {country} = useParams();
    const [spots, setSpots] = useState([]);
    useEffect(()=>{
        fetch(`https://wandersea-server.vercel.app/myspots/${country}`)
        .then(res=>res.json())
        .then(data=>{
            setSpots(data);
        })
    },[country])

    // const loadedSpots = useLoaderData();
    // const [spots, setSpots] = useState(loadedSpots);
    return (
        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
                <div className="bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('/src/assets/Banner/ratargul.jpg')] bg-center bg-cover py-20 text-center my-6 rounded-xl mx-3 lg:mx-0">
                    <p className="text-4xl  font-bold text-[#9aeafa] mons"> {country} Tourist Spots</p>
                </div>
                <div className="mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    spots.map(spot=><CountrySpotCards key={spots._id} spot={spot}></CountrySpotCards>)
                }
                </div>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default CountryRoute;