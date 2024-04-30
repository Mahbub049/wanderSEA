import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Country from "../Country/Country";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import HomeSpot from "../HomeSpot/HomeSpot";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
                <Banner></Banner>
                <Features></Features>
                <HomeSpot></HomeSpot>
                <Country></Country>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;