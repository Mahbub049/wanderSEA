import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const {login,googleLogin,githubLogin} = useContext(AuthContext);
    const {register, handleSubmit, formState: { errors }} = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        console.log(email, password)
        login(email, password)
        .then(()=>{
            toast.success("Successful");
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            toast.error("Your email or password didn't matched!");
        })
    }
    const googleUserLogin = () =>{
        googleLogin()
        .then(()=>{navigate(location?.state ? location.state : '/')})
        .catch((error)=>{toast.error("Please Try Again!");})
    }
    const githubUserLogin = () =>{
        githubLogin()
        .then(()=>{navigate(location?.state ? location.state : '/');})
        .catch((error)=>{toast.error("Please Try Again!");})
    }
    return (
        <HelmetProvider>
            <Helmet>
                <title>Login || Radiant Residences</title>
            </Helmet>
            <ToastContainer />
            <div className='container mx-auto'>
            <Navbar></Navbar>
            <div>
                <div className="hero mt-16">
                    <div className="hero-content flex-col md:w-full w-[340px] lg:w-[800px] h-[600px]">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold mb-3">Login now!</h1>
                        </div>
                        <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
                                <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered"/>
                                    {errors.email && <span className="mt-3 text-[#0c7acd]">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: true })} placeholder="Password" className="input input-bordered" />
                                    {errors.password && <span className="my-2 text-[#0c7acd]">This field is required</span>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#0c7acd] text-lg text-white">Login</button>
                                </div>
                            </form>
                           <div className='flex flex-col md:flex-row lg:flex-row lg:gap-4 mx-auto'>
                                <div className='mx-8 lg:mb-8 mb-4 flex justify-center'>
                                    <button onClick={googleUserLogin} className="btn text-lg">
                                        <FcGoogle></FcGoogle>
                                        Login with Google
                                    </button>
                                </div>
                                <div className='mx-8 mb-8 flex justify-center'>
                                    <button onClick={githubUserLogin} className="btn text-lg">
                                        <FaGithub></FaGithub>
                                        Login with Github
                                    </button>
                                </div>
                           </div>
                            <div className='mx-8 mb-8 flex justify-center'>
                                <p>Don&apos;t have an account? <Link className='text-[#0c7acd]' to={'/register'}>Register Now</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
        </HelmetProvider>
    );
};

export default Login;