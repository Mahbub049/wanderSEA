import { Link } from "react-router-dom";

const ListCard = ({item}) => {
    const {image, spotname, location, country} = item;
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
                <Link to={'/update'} className="btn bg-[#5092da] btn-ghost text-white">Update</Link>
                </th>
                <th>
                <Link to={'/delete'} className="btn bg-[#5092da] btn-ghost text-white">Delete</Link>
                </th>
            </tr>
    );
};

export default ListCard;