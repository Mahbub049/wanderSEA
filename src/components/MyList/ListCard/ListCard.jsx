import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const ListCard = ({item, items, setItem}) => {
    const {_id, image, spotname, location, country} = item;
    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://wandersea-server.vercel.app/addspot/${id}`, {
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          setItem(items.filter(i=>i._id !==id))
                    }
                })
            }
          });
    }
    return (
            <tr className="poppins">
                <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold text-lg">{spotname}</div>
                    </div>
                </div>
                </td>
                <td>
                {location}
                <br/>
                </td>
                <td>{country}</td>
                <th>
                <Link to={`/update/${_id}`} className="btn bg-[#5092da] btn-ghost text-white">Update</Link>
                </th>
                <th>
                <button onClick={()=>handleDelete(_id)} className="btn bg-[#5092da] btn-ghost text-white">Delete</button>
                </th>
            </tr>
    );
};

export default ListCard;