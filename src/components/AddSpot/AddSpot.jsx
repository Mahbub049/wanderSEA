import Navbar from "../Navbar/Navbar";
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form"
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";
import { SiCashapp } from "react-icons/si";
import { TiWeatherCloudy } from "react-icons/ti";
import { MdCardTravel } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import Footer from "../Footer/Footer";

const AddSpot = () => {
    const {user} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data, e) => {
        // const {avg_cost, country, description, email, image, location, name, seasonality, spotname, travel, visitors
        // } = data;
        data.avg_cost = parseInt(data.avg_cost);
        fetch('https://wandersea-server.vercel.app/addspot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            Swal.fire({
                title: 'Success!',
                text: 'Successfully Added',
                icon: 'success',
                confirmButtonText: 'Okay'
              })
              e.target.reset();
        })
      }

    return (
        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
                <div className="bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('/src/assets/Banner/bali.jpg')] bg-center bg-cover py-20 text-center my-6 rounded-xl mx-3 lg:mx-0">
                    <p className="lg:text-4xl text-2xl font-bold text-[#9aeafa] mons">Add Tourist Spot</p>
                </div>
                <div className="mt-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="poppins mx-3 lg:mx-0">
                        <div className="flex flex-col md:flex-row lg:flex-row gap-2 lg:gap-4 mb-3">
                            <div className="flex-1">
                            <div className="label">
                                <span className="label-text font-semibold text-[#0c7acd]">User Name</span>
                            </div>
                            <label className="input input-bordered input-info flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-blue-500 w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input {...register("name", { required: true })} type="text" defaultValue={user.displayName} className="grow" placeholder="Username" />
                                {errors.name && <span className="text-red-500">This field is required</span>}
                            </label>
                        </div>
                        <div className="flex-1">
                            <div className="label">
                                <span className="label-text font-semibold text-[#0c7acd]">User Email</span>
                            </div>
                            <label className="input input-bordered input-info flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-blue-500 w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input {...register("email", { required: true })} type="email" defaultValue={user.email} className="grow" placeholder="User Email" />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </label>
                        </div>
                        </div>
                        <div className="flex flex-col md:flex-row lg:flex-row gap-2 lg:gap-4 mb-3">
                            <div className="flex-1">
                            <div className="label">
                                <span className="label-text font-semibold text-[#0c7acd]">Tourist Spot Name</span>
                            </div>
                            <label className="input input-bordered input-info flex items-center gap-2">
                                <MdDriveFileRenameOutline className="text-blue-500" />
                                <input {...register("spotname", { required: true })} type="text" className="grow" placeholder="Tourist Spot Name" />
                                {errors.spotname && <span className="text-red-500">This field is required</span>}
                            </label>
                        </div>
                        <div className="flex-1">
                            <div className="label">
                                <span className="label-text font-semibold text-[#0c7acd]">Country Name</span>
                            </div>
                            <label className="input input-bordered input-info flex items-center gap-2">
                                <IoMdGlobe className="text-blue-500"></IoMdGlobe>
                                <select {...register("country", { required: true })} type="text" className="grow input-info bg-transparent border-0 outline-0 " placeholder="Country Name">
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Cambodia">Cambodia</option>
                                </select>
                                {/* <input {...register("country", { required: true })} type="text" className="grow" placeholder="Country Name" /> */}
                                {errors.country && <span className="text-red-500">This field is required</span>}
                            </label>
                        </div>
                        </div>
                        <div className="flex flex-col md:flex-row lg:flex-row gap-2 lg:gap-4 mb-3">
                            <div className="flex-1">
                            <div className="label">
                                <span className="label-text font-semibold text-[#0c7acd]">Location</span>
                            </div>
                            <label className="input input-bordered input-info flex items-center gap-2">
                                <FaMapMarkerAlt className="text-blue-500" />
                                <input {...register("location", { required: true })} type="text" className="grow" placeholder="Location" />
                                {errors.location && <span className="text-red-500">This field is required</span>}
                            </label>
                        </div>
                        <div className="flex-1">
                            <div className="label">
                                <span className="label-text font-semibold text-[#0c7acd]">Image URL</span>
                            </div>
                            <label className="input input-bordered input-info flex items-center gap-2">
                                <FaImage className="text-blue-500"></FaImage>
                                <input {...register("image", { required: true })} type="text" className="grow" placeholder="Image URL" />
                                {errors.image && <span className="text-red-500">This field is required</span>}
                            </label>
                        </div>
                        </div>
                        <div className="mb-3">
                            <div className="label">
                                <span className="label-text font-semibold text-[#0c7acd]">Short Description</span>
                            </div>
                            <label className="input input-bordered input-info flex items-center gap-2">
                                <MdOutlineDescription className="text-blue-500" />
                                <input {...register("description", { required: true })} type="text" className="grow" placeholder="Short Description" />
                                {errors.description && <span className="text-red-500">This field is required</span>}
                            </label>
                        </div>
                        <div className="flex flex-col md:flex-row lg:flex-row gap-2 lg:gap-4 mb-3">
                            <div className="flex-1">
                            <div className="label">
                                <span className="label-text font-semibold text-[#0c7acd]">Average Cost</span>
                            </div>
                            <label className="input input-bordered input-info flex items-center gap-2">
                                <SiCashapp className="text-blue-500" />
                                <input {...register("avg_cost", { required: true })} type="number" className="grow" placeholder="Average Cost" />
                                {errors.avg_cost && <span className="text-red-500">This field is required</span>}
                            </label>
                        </div>
                        <div className="flex-1">
                            <div className="label">
                                <span className="label-text font-semibold text-[#0c7acd]">Seasonality</span>
                            </div>
                            <label className="input input-bordered input-info flex items-center gap-2">
                                <TiWeatherCloudy className="text-blue-500"></TiWeatherCloudy>
                                <input {...register("seasonality", { required: true })} type="text" className="grow" placeholder="Seasonality" />
                                {errors.seasonality && <span className="text-red-500">This field is required</span>}
                            </label>
                        </div>
                        </div>
                        <div className="flex flex-col md:flex-row lg:flex-row gap-2 lg:gap-4 mb-6">
                            <div className="flex-1">
                                <div className="label">
                                    <span className="label-text font-semibold text-[#0c7acd]">Travel Time</span>
                                </div>
                                <label className="input input-bordered input-info flex items-center gap-2">
                                    <MdCardTravel className="text-blue-500" />
                                    <input {...register("travel", { required: true })} type="text" className="grow" placeholder="Travel Time" />
                                    {errors.travel && <span className="text-red-500">This field is required</span>}
                                </label>
                            </div>
                            <div className="flex-1">
                                <div className="label">
                                    <span className="label-text font-semibold text-[#0c7acd]">Total Visitors Per Year</span>
                                </div>
                                <label className="input input-bordered input-info flex items-center gap-2">
                                    <FaRegEye className="text-blue-500"></FaRegEye>
                                    <input {...register("visitors", { required: true })} type="text" className="grow" placeholder="Total Visitors Per Year" />
                                    {errors.visitors && <span className="text-red-500">This field is required</span>}
                                </label>
                            </div>
                        </div>
                        <button className="btn btn-wide w-full text-white font-semibold text-xl bg-[#0c7acd]">Add</button>
                    </form>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AddSpot;