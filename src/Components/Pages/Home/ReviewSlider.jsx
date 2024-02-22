

import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';







const ReviewSlider = () => {



    return (


        <div className='py-20 lg:mx-56'>
            <div>
                <h1 className="text-center md:text-4xl font-extrabold">Client Review</h1>
                <p className="text-center w-1/2 mx-auto pt-8">
                    aven Flexibility, Customizability, Design Quality, Features - this theme ticks every single box.</p>
            </div>
            <div className='my-20 hidden md:flex'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={3}
                    autoplay={true}
                    // navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide className='pb-20'>

                        <div className="pl-5">
                            <h1 className=" text-base md:text-xl font-extrabold font-sans">RK Json</h1>
                            <p className='py-3 '>Customer</p>
                            <p>On The Windows Talking Painted Pasture Yet Its Express Parties Use. Sure Last Upon He Same As knew Next.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pb-20'>

                        <div className="pl-5">
                            <h1 className=" text-base md:text-xl font-extrabold font-sans">Maria </h1>
                            <p className='py-3 '>Customer</p>
                            <p>On The Windows Talking Painted Pasture Yet Its Express Parties Use. Sure Last Upon He Same As knew Next.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pb-20'>

                        <div className="pl-5">
                            <h1 className=" text-base md:text-xl font-extrabold font-sans">Wilson jk</h1>
                            <p className='py-3 '>Customer</p>
                            <p>On The Windows Talking Painted Pasture Yet Its Express Parties Use. Sure Last Upon He Same As knew Next.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pb-20'>

                        <div className="pl-5">
                            <h1 className=" text-base md:text-xl font-extrabold font-sans">Abir Hossain</h1>
                            <p className='py-3 '>Customer</p>
                            <p>On The Windows Talking Painted Pasture Yet Its Express Parties Use. Sure Last Upon He Same As knew Next.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pb-20'>

                        <div className="pl-5">
                            <h1 className="text-base font-bold font-sans">Affan Rahman</h1>

                            <p className='py-3 '>Customer</p>
                            <p>On The Windows Talking Painted Pasture Yet Its Express Parties Use. Sure Last Upon He Same As knew Next.</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>


            {/* display in small device  */}

            <div className='md:hidden'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={2}
                    slidesPerView={1}
                    autoplay={true}
                    // navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide className='pb-20'>

                        <div className="pl-5">
                            <h1 className=" text-base md:text-xl font-extrabold font-sans">RK Json</h1>
                            <p className='py-3 '>Customer</p>
                            <p>On The Windows Talking Painted Pasture Yet Its Express Parties Use. Sure Last Upon He Same As knew Next.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pb-20'>

                        <div className="pl-5">
                            <h1 className=" text-base md:text-xl font-extrabold font-sans">Maria </h1>
                            <p className='py-3 '>Customer</p>
                            <p>On The Windows Talking Painted Pasture Yet Its Express Parties Use. Sure Last Upon He Same As knew Next.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pb-20'>

                        <div className="pl-5">
                            <h1 className=" text-base md:text-xl font-extrabold font-sans">Wilson jk</h1>
                            <p className='py-3 '>Customer</p>
                            <p>On The Windows Talking Painted Pasture Yet Its Express Parties Use. Sure Last Upon He Same As knew Next.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pb-20'>

                        <div className="pl-5">
                            <h1 className=" text-base md:text-xl font-extrabold font-sans">Abir Hossain</h1>
                            <p className='py-3 '>Customer</p>
                            <p>On The Windows Talking Painted Pasture Yet Its Express Parties Use. Sure Last Upon He Same As knew Next.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='pb-20'>

                        <div className="pl-5">
                            <h1 className=" text-base md:text-xl font-extrabold font-sans">Affan Rahman</h1>
                            <p className='py-3 '>Customer</p>
                            <p>On The Windows Talking Painted Pasture Yet Its Express Parties Use. Sure Last Upon He Same As knew Next.</p>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </div >



    );
};

export default ReviewSlider;