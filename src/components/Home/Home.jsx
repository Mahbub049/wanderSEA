import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import HomeSpot from "../HomeSpot/HomeSpot";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
                <Banner></Banner>
                <HomeSpot></HomeSpot>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;