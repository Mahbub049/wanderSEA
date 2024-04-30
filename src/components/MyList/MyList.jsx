import { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../Providers/AuthProvider";
import ListCard from "./ListCard/ListCard";
import Footer from "../Footer/Footer";

const MyList = () => {
    const {user} = useContext(AuthContext);
    const [item, setItem] = useState([]);
    useEffect(()=>{
        fetch(`https://wandersea-server.vercel.app/myspotsemail/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setItem(data);
        })
    },[user])
    return (
        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
                <div>
                    <div className="bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('/src/assets/Banner/kualalampur.jpg')] bg-center bg-cover py-20 text-center my-6 rounded-xl mx-3 lg:mx-0">
                        <p className="text-4xl  font-bold text-[#9aeafa] mons">My List</p>
                    </div>
                    <div className="overflow-x-auto mt-8">
                        <table className="table poppins">
                            {/* head */}
                            <thead>
                            <tr className="text-lg text-[#88bae6]">
                                <th>Place Name, Image</th>
                                <th>Location</th>
                                <th>Country</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                item.map(i=><ListCard key={i._id} items={item} setItem={setItem} item={i}></ListCard>)
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MyList;