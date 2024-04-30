import { Helmet, HelmetProvider } from "react-helmet-async";
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
            <HelmetProvider>
            <Helmet>
                <title>Home || WanderSEA</title>
            </Helmet>
            <div className="container mx-auto">
                <Navbar></Navbar>
                <Banner></Banner>
                <Features></Features>
                <HomeSpot></HomeSpot>
                <Country></Country>
                <Contact></Contact>
                <Footer></Footer>
            </div>
            </HelmetProvider>
        </div>
    );
};

export default Home;