import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;