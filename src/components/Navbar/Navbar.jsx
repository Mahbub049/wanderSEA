import { Link, NavLink} from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { GiWaveCrest } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    
    const signOutUser = () => {
        logOut()
        .then(()=>{})
        .catch(()=>{})
    }
    // console.log(user)
    const lists = 
    <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/contact'}>All Tourists Spot</NavLink></li>
        {user && <>
            <li><NavLink to={'/addspot'}>Add Tourists Spot</NavLink></li>
            <li><NavLink to={'/profileUpdate'}>My List</NavLink></li></>
        }
    </>
    return (
        <div className="navbar bg-base-100 mt-6 ">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 lg:z-[1] p-2 shadow bg-base-100 rounded-box w-52 z-10">
                    {lists}
                </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost  lg:text-3xl font-bold text-[#0c7acd] pl-0 md: pl-4 lg:pl-4 mons">
                    <GiWaveCrest className="hidden lg:flex"></GiWaveCrest>
                    WanderSEA
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {lists}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <>
                    <div className="dropdown dropdown-end">
                        <Tooltip className="z-10" id="my-tooltip" />
                        <div className="tooltip" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} data-tooltip-place="left">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <Link to={'/profile'}>
                                    <img referrerpolicy="no-referrer" alt="User" src={user.photoURL? user.photoURL : <FaRegUserCircle />} />
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={signOutUser} className="btn text-white lg:ml-4 bg-[#0c7acd]">Log Out</button>
                </> :
                <div>
                    <Link to={'/login'} className="btn text-white ml-4 bg-[#0c7acd]">Log In</Link>
                    <Link to={'/register'} className="btn text-white ml-4 bg-[#0c7acd]">Register</Link>
                </div>}
            </div>
        </div>
    );
};

export default Navbar;