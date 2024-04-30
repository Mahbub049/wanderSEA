import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
const Features = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center mt-16 lg:mt-24">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-2 lg:mx-0">
                <div className='bg-[linear-gradient(45deg,rgba(19,19,24,0.60),rgba(19,19,24,0.60)),url("/src/assets/Banner/bali.jpg")] bg-cover bg-center text-white px-8 py-16 rounded-xl'>
                    <h3 className="text-2xl font-bold mb-4 mons">Tourist Spots Collection</h3>
                    <p className="poppins font-semibold">Curate your travel dreams with our &apos;Tourist Spots Collection&apos;—a treasure trove of destinations waiting to be explored and experienced.</p>
                </div>
                <div className='bg-[linear-gradient(45deg,rgba(19,19,24,0.60),rgba(19,19,24,0.60)),url("/src/assets/Banner/ratargul.jpg")] bg-cover bg-center text-white px-8 py-16 rounded-xl'>
                    <h3 className="text-2xl font-bold mb-4 mons">Add Tourist Spots</h3>
                    <p className="poppins font-semibold">Easily expand your travel horizons with our &apos;Add Tourist Spots&apos; feature, empowering you to enrich your journey with ease.</p>
                </div>
                <div className='bg-[linear-gradient(45deg,rgba(19,19,24,0.60),rgba(19,19,24,0.60)),url("/src/assets/Banner/kualalampur.jpg")] bg-cover bg-center text-white px-8 py-16 rounded-xl'>
                    <h3 className="text-2xl font-bold mb-4 mons">Your Tourist Spot Lists</h3>
                    <p className="poppins font-semibold">Manage, update, and cherish your travel memories with &apos;Your Tourist Spots Collection,&apos; where you have control over your added destinations</p>
                </div>
                <div className='bg-[linear-gradient(45deg,rgba(19,19,24,0.60),rgba(19,19,24,0.60)),url("/src/assets/Banner/bali.jpg")] bg-cover bg-center text-white px-8 py-16 rounded-xl'>
                    <h3 className="text-2xl font-bold mb-4 mons">Countrywise Spots</h3>
                    <p className="poppins font-semibold">Explore destinations effortlessly with &apos;Country Wise Spots,&apos; offering curated lists to navigate and discover spots tailored to each country.</p>
                </div>

            </div>
            <div className="flex-1 mx-3 text-center lg:text-left">
                <h2 className="mons text-xl lg:text-3xl font-extrabold mb-3 lg:mb-6 italic text-[#0c7acd]">Welcome to WanderSEA</h2>
                <h1 className='mb-6 text-4xl lg:text-5xl mons font-bold'>
                    It&apos;s time to visit {' '}
                    <span className='text-[#0c7acd]' style={{ fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['Bangladesh', 'Thailand', 'Indonesia', 'Malaysia' , 'Cambodia', 'Vietnam']}
                        loop={15}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                    </span>
                </h1>
                <p className="mb-6 leading-7">
                    Experience the enchanting tapestry of Southeast Asia&apos;s diverse destinations, including Bangladesh, Thailand, Malaysia, Cambodia, Vietnam, and Indonesia, with our comprehensive travel platform. Immerse yourself in a world of captivating landscapes and rich cultural experiences as you explore a myriad of tourist spots and meticulously curated travel plans tailored to your preferences.
                    <br />
                     Our user-friendly interface empowers you to effortlessly create, update, and delete personalized itineraries, ensuring a seamless and bespoke journey every step of the way. From the serene hills of Rangamati to the bustling markets of Bangkok, each country offers a unique tapestry of sights, sounds, and flavors waiting to be explored. Start planning your next adventure today and let us be your trusted companion on an unforgettable voyage through the wonders of Southeast Asia
                </p>
                <div className='text-center lg:text-left'>
                    <Link to={'/allspots'} className="btn bg-[#0c7acd] text-white">View All Tourist Spots</Link>
                </div>
            </div>
        </div>
    );
};

export default Features;