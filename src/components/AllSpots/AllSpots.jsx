import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import SpotCard from "./SpotCard/SpotCard";
import Footer from "../Footer/Footer";

const AllSpots = () => {
    const loadedSpots = useLoaderData();
    const [spots, setSpots] = useState(loadedSpots);
    return (
        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
                <div className="bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('/src/assets/Banner/ratargul.jpg')] bg-center bg-cover py-20 text-center my-6 rounded-xl mx-3 lg:mx-0">
                    <p className="text-4xl  font-bold text-[#9aeafa] mons">All Tourist Spots</p>
                    <div className="mt-4">
                        <details className="dropdown text-xl">
                            <summary className="m-1 btn hover:bg-[#8cc6fa] bg-[#5092da] text-white border-0">Sort By</summary>
                            <ul className="p-2 shadow menu -left-20 dropdown-content z-[1] rounded-box text-white w-72 hover:bg-[#8cc6fa] bg-[#5092da]">
                                <li><Link to={'/allspots/sorted'}>Average Cost (Descending)</Link></li>
                            </ul>
                        </details>
                    </div>
                </div>
                <div className="mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    loadedSpots.map(spot=><SpotCard key={spots._id} spot={spot}></SpotCard>)
                }
                </div>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default AllSpots;