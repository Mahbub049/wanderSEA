import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye, FaRegEyeSlash  } from "react-icons/fa6";
import { AuthContext } from "../Providers/AuthProvider";


const Register = () => {
    const [passwordState, setPasswordState] = useState(false);
    const {register, handleSubmit, formState: { errors }} = useForm();
    const {createUser, updateUserInfo, setUser} = useContext(AuthContext);
    // const navigate = useNavigate();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        const name = data.name;
        const photoURL = data.photoURL;
        if(passwordRegex.test(password)){
            createUser(email, password)
            .then(()=>{
                updateUserInfo(name, photoURL)
                .then(()=>{
                    setUser({
                        displayName: name,
                        photoURL: photoURL,
                        email: email
                    })
                    // navigate(location?.state ? location.state : '/')
                    toast.success("Successfully Registered!");
                })
                .catch(()=>{   
                    toast.error("Something went wrong!");
                })
            })
            .catch(()=>{
                toast.error("This email already exists!");
            })
        }
        else{
            toast.error("Password must have uppercase, lowercase and at least 6 characters!");
        }
    }
    return (

        <div className='container mx-auto'>
                <ToastContainer />
            <Navbar></Navbar>
            <div>
                <div className="hero mt-40 mb-32">
                    <div className="hero-content flex-col w-[340px] md:w-full lg:w-[800px] h-[600px]">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold mb-3">Register now!</h1>
                        </div>
                        <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
                                <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="Name" placeholder="Your Name" className="input input-bordered" {...register("name", { required: true })}/>
                                    {errors.name && <span className="mt-2 text-[#0c7acd]">This field is required</span>}
                                </div>
                                <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="photourl" placeholder="Photo URL" className="input input-bordered" {...register("photoURL", { required: true })}/>
                                    {errors.photoURL && <span className="mt-2 text-[#0c7acd]">This field is required</span>}
                                </div>
                                <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })}/>
                                    {errors.email && <span className="mt-2 text-[#0c7acd]">This field is required</span>}
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={passwordState ? 'text' : 'password'} placeholder="password" className="input input-bordered" {...register("password", { required: true })}/>
                                    <div onClick={()=>setPasswordState(!passwordState)} className="absolute right-5 top-[50px]">
                                        {
                                            passwordState ? <FaRegEye className="text-xl"/> : <FaRegEyeSlash className="text-xl" />
                                        }
                                    </div>
                                    {errors.password && <span className="mt-2 text-[#0c7acd]">This field is required</span>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#0c7acd] text-lg text-white">Register</button>
                                </div>
                            </form>
                            <div className='mx-8 mb-8 flex justify-center'>
                                <p>Already have an account? <Link className="text-[#0c7acd]" to={'/login'}>Login Now</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Register;