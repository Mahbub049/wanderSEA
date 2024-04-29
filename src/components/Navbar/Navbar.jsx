import { Link, NavLink} from "react-router-dom";
import './Navbar.css'
import { useContext, useEffect, useState } from "react";
import { GiWaveCrest } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
      );
      const handleToggle = (e) =>{
        if (e.target.checked){
          setTheme("dark");
        } else {
          setTheme("light");
        }
    };

      useEffect(()=>{
        localStorage.setItem("theme",theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
      }, [theme]); 
    
    const signOutUser = () => {
        logOut()
        .then(()=>{})
        .catch(()=>{})
    }
    // console.log(user)
    const lists = 
    <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/allspots'}>All Tourists Spot</NavLink></li>
        {user && <>
            <li><NavLink to={'/addspot'}>Add Tourists Spot</NavLink></li>
            <li><NavLink to={`/mylist`}>My List</NavLink></li></>
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
                        <label className="swap swap-rotate mr-2">
                                <input type="checkbox" onChange={handleToggle} checked={theme==='light' ? false : true}/>
                                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                        </label>
                        <Tooltip className="z-10" id="my-tooltip" />
                        <div className="tooltip" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} data-tooltip-place="left">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <div>
                                    <img referrerpolicy="no-referrer" alt="User" src={user.photoURL? user.photoURL : <FaRegUserCircle />} />
                                    <div tabIndex={0} className="mt-3 z-10 card card-compact dropdown-content w-64 bg-base-100 shadow">
                                        <div className="card-body">
                                        <img alt="User" className="w-[20px] rounded-full" src={user.photoURL? user.photoURL : <FaRegUserCircle />} />
                                        <span className="font-bold text-lg">{user.displayName}</span>
                                        <span className="text-info">{user.email}</span>
                                    </div>
                                </div>
                                </div>
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