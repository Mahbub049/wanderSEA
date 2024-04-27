import Navbar from "../Navbar/Navbar";

const AllSpots = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
                <div className="bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('/src/assets/Banner/ratargul.jpg')] bg-center bg-cover py-20 text-center my-6 rounded-xl mx-3 lg:mx-0">
                    <p className="text-4xl  font-bold text-[#9aeafa] mons">All Tourist Spots</p>
                </div>
            </div>
        </div>
    );
};

export default AllSpots;