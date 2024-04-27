import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import SpotCard from "./SpotCard/SpotCard";

const AllSpots = () => {
    const loadedSpots = useLoaderData();
    const [spots, setSpots] = useState(loadedSpots);
    return (
        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
                <div className="bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('/src/assets/Banner/ratargul.jpg')] bg-center bg-cover py-20 text-center my-6 rounded-xl mx-3 lg:mx-0">
                    <p className="text-4xl  font-bold text-[#9aeafa] mons">All Tourist Spots</p>
                </div>
                <div className="mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    spots.map(spot=><SpotCard key={spots._id} spot={spot}></SpotCard>)
                }
                </div>
            </div>
        </div>
    );
};

export default AllSpots;