import { FiSquare } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa6";
import { FaGlobeAsia, FaRegEye } from "react-icons/fa";
import { TiWeatherCloudy } from "react-icons/ti";
import { MdCardTravel } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";

const CountrySpotCards = ({spot}) => {
    const {_id, avg_cost, country, description, image, location, seasonality, spotname, travel, visitors} = spot;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl transform hover:scale-105 transition-transform duration-300 relative poppins">
            <figure><img className="w-full object-cover h-[280px]" src={image} alt="Shoes" /></figure>
            <div className="absolute left-2 top-[240px] flex gap-2 items-center text-[#0f191a] bg-[#8cc6fa] px-2 py-1 rounded-lg">
                <IoLocationSharp className="text-xl" />
                <p>{location}</p>
            </div>
            <div className="card-body">
                <div className="flex gap-1 items-center text-[#5092da]">
                        <TbCurrencyTaka className="text-2xl font-extrabold"></TbCurrencyTaka>
                        <h2 className="card-title ">{avg_cost}</h2>
                </div>
                
                <h2 className="text-2xl font-bold">{spotname}</h2>
                <div className="flex gap-2 items-center lg:my-2">
                        <FaGlobeAsia className="text-lg" />
                        <p><span className="font-semibold">Country:</span> {country}</p>
                </div>
                {/* <p>{description}</p> */}
                {
                    description.length>120 ? <p>{description.slice(0,120)}...</p> : <p>{description}</p>
                }
                <div className="flex flex-col gap-2 mt-3">
                    <div className="flex gap-2 items-center">
                        <TiWeatherCloudy className="text-xl"></TiWeatherCloudy>
                        <p><span className="font-semibold">Seasonality:</span> {seasonality}</p>
                    </div>
                </div>
                <div className="card-actions justify-end my-6">
                    <Link to={`/allspots/${_id}`} className="btn bg-[#5092da] text-white w-full">View Details</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CountrySpotCards;