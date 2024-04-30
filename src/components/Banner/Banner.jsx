import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
    return (
        <div className='banner'>
            <div className='mt-8 mx-1'>
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <img src="" alt="" />
        <SwiperSlide>
            <div className='bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url("/src/assets/Banner/bali.jpg")] bg-center bg-cover min-h-[650px] rounded-xl'>
                <div className='flex flex-col justify-center items-center h-[650px] text-center'>
                    <h1 className='text-white font-bold text-2xl md:text-4xl lg:text-6xl lg:leading-[70px]'>Explore the Wonders<br /> of Southeast Asia</h1>
                    <p className='text-white lg:text-lg lg:leading-8 mt-6 px-8 md:px-16 lg:px-96 mb-6'>Embark on an unforgettable journey to discover breathtaking landscapes, vibrant cultures, and hidden gems across Southeast Asia&apos;s diverse destinations.</p>
                    {/* <a href="#estates">
                        <button className='btn lg:text-lg bg-[#0c7acd] border-0 text-white'>Find Your Dream Home</button>
                    </a> */}
                </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className='bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url("/src/assets/Banner/kualalampur.jpg")] bg-center bg-cover min-h-[650px] rounded-xl'>
                <div className='flex flex-col justify-center items-center h-[650px] text-center'>
                        <h1 className='text-white font-bold text-2xl lg:text-6xl md:text-4xl lg:leading-[70px]'>Discover Authentic Experiences </h1>
                        <p className='text-white lg:text-lg lg:leading-8 mt-6 px-8 md:px-16 lg:px-96 mb-6'>Immerse yourself in the rich tapestry of Southeast Asian heritage, from ancient temples and bustling markets to pristine beaches and lush jungles.</p>
                        {/* <a href="#estates">
                            <button className='btn lg:text-lg bg-[#0c7acd] border-0 text-white'>Discover Seaside Homes</button>
                        </a> */}
                    </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className='bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url("/src/assets/Banner/ratargul.jpg")] bg-center bg-cover min-h-[650px] rounded-xl'>
                <div className='flex flex-col justify-center items-center h-[650px] text-center'>
                        <h1 className='text-white font-bold text-2xl lg:text-6xl md:text-4xl lg:leading-[70px]'>Discover Authentic Experiences</h1>
                        <p className='text-white lg:text-lg lg:leading-8 mt-6 px-8 md:px-16 lg:px-96 mb-6'>Indulge in thrilling adventures and adrenaline-pumping activities, from trekking through remote wilderness to diving into crystal-clear waters and exploring vibrant underwater worlds.</p>
                        {/* <a href="#estates">
                            <button className='btn lg:text-lg bg-[#0c7acd] border-0 text-white'>Explore Green Havens</button>
                        </a> */}
                    </div>
            </div>
            </SwiperSlide>
      </Swiper>
            </div>
        </div>
    );
};

export default Banner;