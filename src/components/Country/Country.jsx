import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CountryCard from "./CountryCard/CountryCard";

const Country = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://wandersea-server.vercel.app/countries')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div className="my-16">
            <div className="text-center mb-16">
                <h2 className="text-2xl lg:text-5xl font-bold">Countries</h2>
                <p className="lg:px-80 px-3 leading-7 mt-6">The Southeast Asian countries section features vibrant destinations like Bangladesh, Thailand, Indonesia, Malaysia, Vietnam, and Cambodia. From the lush Sundarbans to the majestic Angkor Wat, each offers rich culture, diverse landscapes, and unforgettable experiences.</p>
            </div>
            <div className="mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    countries.map(country=><CountryCard key={country._id} country={country}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default Country;