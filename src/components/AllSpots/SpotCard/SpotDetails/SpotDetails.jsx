import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";
import { IoBedOutline, IoLocationSharp } from "react-icons/io5";
import { FiSquare } from "react-icons/fi";
import { IoIosArrowRoundBack, IoMdGlobe } from "react-icons/io";
import { TbCurrencyTaka } from "react-icons/tb";
import { MdCardTravel } from "react-icons/md";
import { LuBath } from "react-icons/lu";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaRegEye } from "react-icons/fa";
import Footer from "../../../Footer/Footer";

const SpotDetails = () => {
    const spot = useLoaderData();
    const {_id, avg_cost, country, name, email, description, image, location, seasonality, spotname, travel, visitors} = spot;
    // const {id} = useParams();
    // const idInt = parseInt(id);
    // const spot = spots.find(spotId=>spotId.id === idInt);
    return (
        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
                <div className="mt-8 gap-10">
                    <div className=" mx-3 lg:mx-0 relative mb-12">
                        <img className="w-full h-[500px] object-cover flex-1 rounded-lg" src={image} alt="" />
                    </div>
                    <div className="flex lg:flex-row flex-col justify-between gap-3 lg:gap-32 mx-3">
                        <div className="flex-1">
                            <h2 className="text-3xl lg:text-4xl font-bold mons">{spotname}</h2>
                            <div className="flex gap-3">
                                <div className=" flex gap-2 items-center my-4 text-[#5092da] rounded-lg poppins">
                                    <IoLocationSharp className="text-xl" />
                                    <p className="font-semibold">Location: {location}</p>
                                </div>
                                <div className=" flex gap-2 items-center my-4 text-[#5092da] rounded-lg poppins">
                                    <IoMdGlobe className="text-xl text-blue-500"></IoMdGlobe>
                                    <p className="font-semibold">Country: {country}</p>
                                </div>
                            </div>
                           <div>
                            <h2 className="my-2 font-bold text-[#4e789d]">Average Cost: </h2>
                                <div className="poppins flex text-2xl lg:text-3xl font-bold text-[#0c7acd]">
                                    <TbCurrencyTaka className="text-4xl font-extrabold"></TbCurrencyTaka>
                                    <h2 >{avg_cost}</h2>
                                </div>
                           </div>
                            <hr className="my-4" />
                            <p className="text-gray-500 poppins"><span className="font-semibold text-black">Description: </span>{description}</p>
                        </div>
                        <div className="flex-1">
                                <p className="font-bold mb-3 ">User Information:</p>
                            <div className="border-2 poppins border-[#0096C7] rounded-xl pb-6 px-8">
                                <div className="flex gap-2 items-center text-[#0096C7] rounded-lg poppins mt-6 mb-4 font-semibold">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-[#0096C7] text-xl w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                    <p className="text-[#0096C7]">User Name: {name}</p>
                                </div>
                                <div className="flex gap-2 items-center text-[#0096C7] rounded-lg poppins mb-2 font-semibold">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-[#0096C7] text-xl w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                    <p className="text-[#0096C7]">User Email: {email}</p>
                                </div>
                                
                            </div>
                            <hr className="my-4" />
                            <div>
                                <p className="font-bold ">Tour Details:</p>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div className="flex flex-1 gap-2 items-center bg-[#0c7acd] text-white px-4 py-2 rounded-lg font-semibold">
                                    <MdCardTravel className="text-lg" />
                                    <p>Travel Duration: {travel}</p>
                                    </div>
                                    <div className="flex flex-1 gap-2 items-center bg-[#0c7acd] text-white px-4 py-2 rounded-lg font-semibold">
                                    <TiWeatherCloudy className="text-xl"></TiWeatherCloudy>
                                    <p>Seasons: {seasonality}</p>
                                    </div>
                                    <div className="flex gap-2 items-center bg-[#0c7acd] text-white px-4 py-2 rounded-lg font-semibold">
                                        <FaRegEye className="text-xl"></FaRegEye>
                                        <p>Total Visitors Per Year: {visitors}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="my-8 ">
                                <Link className="btn bg-[#0c7acd] text-white" to={-1}>
                                    <IoIosArrowRoundBack className="text-xl font-extrabold"></IoIosArrowRoundBack>
                                    Go Back
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default SpotDetails;