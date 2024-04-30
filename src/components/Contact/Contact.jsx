import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Contact = () => {
    const {user} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data, e) => {
        fetch('http://localhost:5000/contact', {
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
    const position = [23.821060, 90.394636]
    return (
        <div className="container mx-auto">
            <div className="mt-24">
                <div className="text-center mb-16">
                    <h2 className="text-2xl lg:text-5xl font-bold">Contact Us</h2>
                    <p className="px-4 lg:px-96 leading-7 mt-6">We align leaders around a shared purpose and strategic story that catalyzes their business and brand to take action.</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                <div className="mx-3">
                    <MapContainer className="w-full lg:w-[800px] h-[600px]" center={position} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                        <Popup>
                            WanderSEA
                        </Popup>
                        </Marker>
                    </MapContainer>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex-1 gap-2 mx-3 lg:mx-0 poppins">
                        <div className='flex flex-col gap-3 mb-8 text-lg'>
                            <p className="font-semibold">Your Name</p>
                            <input {...register("name", { required: true })} className='py-2 px-3 w-full text-[#0c7acd]' type="text" placeholder='Your Name' />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className='flex flex-col gap-3 mb-8 text-lg'>
                            <p className="font-semibold">Email Address</p>
                            <input {...register("email", { required: true })} className='py-2 px-3 text-[#0c7acd]' type="email" placeholder='Email Address' />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className='flex flex-col gap-3 mb-8 text-lg'>
                            <p className="font-semibold">Phone Number</p>
                            <input {...register("phone", { required: true })} className='py-2 px-3 text-[#0c7acd]' type="number" placeholder='Phone Number' />
                            {errors.phone && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className='flex flex-col gap-3 mb-8 text-lg'>
                            <p className="font-semibold">Message</p>
                            <input {...register("message")} type="text" className='p-2 h-36 w-full text-[#0c7acd]' placeholder='Your Message Here'></input>
                            {errors.message && <span className="text-red-500">This field is required</span>}
                            <input type="submit" value="Submit" className='bg-[#0c7acd] btn w-full rounded-lg text-lg font-bold text-white hover:bg-[#0c79cd7d] cursor-pointer' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    );
};

export default Contact;