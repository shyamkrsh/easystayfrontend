import React, { useRef } from "react";
import Slider from "react-slick";
import { FaLongArrowAltRight } from "react-icons/fa";

import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import banner4 from '../../assets/images/banner4.jpg'
import banner5 from '../../assets/images/banner5.jpg'
import banner6 from '../../assets/images/banner6.jpg'



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Hero() {


    let sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <div className="slider-container">

            <Slider ref={slider => (sliderRef = slider)} {...settings}>
            <div>
                <div className="mt-2 h-[15rem] md:h-[25rem] relative">
                    <img src={banner1} style={{ width: "100%", height: "100%" }} className="absolute" />
                    <div className="absolute w-[100%] h-[100%] bg-black bg-opacity-40 z-100">
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center ">
                            <h1 className="text-[3rem] font-bold text-slate-200 ">Welcome to Easy Stay</h1>
                            <p className="text-xl font-semibold text-gray-400">Here you can search for the houses, hostels, resturants, hostels, etc.</p>
                            <button className="btn btn-primary mt-5 text-xl font-semibold ">Explore Services <FaLongArrowAltRight /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="mt-2 h-[15rem] md:h-[25rem] relative">
                    <img src={banner2} style={{ width: "100%", height: "100%" }} className="absolute" />
                    <div className="absolute w-[100%] h-[100%] bg-black bg-opacity-40 z-100">
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center ">
                            <h1 className="text-[3rem] font-bold text-slate-200 ">Welcome to Easy Stay</h1>
                            <p className="text-xl font-semibold text-gray-400">Here you can search for the houses, hostels, resturants, hostels, etc.</p>
                            <button className="btn btn-primary mt-5 text-xl font-semibold ">Explore Services <FaLongArrowAltRight /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="mt-2 h-[15rem] md:h-[25rem] relative">
                    <img src={banner3} style={{ width: "100%", height: "100%" }} className="absolute" />
                    <div className="absolute w-[100%] h-[100%] bg-black bg-opacity-40 z-100">
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center ">
                            <h1 className="text-[3rem] font-bold text-slate-200 ">Welcome to Easy Stay</h1>
                            <p className="text-xl font-semibold text-gray-400">Here you can search for the houses, hostels, resturants, hostels, etc.</p>
                            <button className="btn btn-primary mt-5 text-xl font-semibold ">Explore Services <FaLongArrowAltRight /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="mt-2 h-[15rem] md:h-[25rem] relative">
                    <img src={banner4} style={{ width: "100%", height: "100%" }} className="absolute" />
                    <div className="absolute w-[100%] h-[100%] bg-black bg-opacity-40 z-100">
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center ">
                            <h1 className="text-[3rem] font-bold text-slate-200 ">Welcome to Easy Stay</h1>
                            <p className="text-xl font-semibold text-gray-400">Here you can search for the houses, hostels, resturants, hostels, etc.</p>
                            <button className="btn btn-primary mt-5 text-xl font-semibold ">Explore Services <FaLongArrowAltRight /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="mt-2 h-[15rem] md:h-[25rem] relative">
                    <img src={banner5} style={{ width: "100%", height: "100%" }} className="absolute" />
                    <div className="absolute w-[100%] h-[100%] bg-black bg-opacity-40 z-100">
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center ">
                            <h1 className="text-[3rem] font-bold text-slate-200 ">Welcome to Easy Stay</h1>
                            <p className="text-xl font-semibold text-gray-400">Here you can search for the houses, hostels, resturants, hostels, etc.</p>
                            <button className="btn btn-primary mt-5 text-xl font-semibold ">Explore Services <FaLongArrowAltRight /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="mt-2 h-[15rem] md:h-[25rem] relative">
                    <img src={banner6} style={{ width: "100%", height: "100%" }} className="absolute" />
                    <div className="absolute w-[100%] h-[100%] bg-black bg-opacity-40 z-100">
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center ">
                            <h1 className="text-[3rem] font-bold text-slate-200 ">Welcome to Easy Stay</h1>
                            <p className="text-xl font-semibold text-gray-400">Here you can search for the houses, hostels, resturants, hostels, etc.</p>
                            <button className="btn btn-primary mt-5 text-xl font-semibold ">Explore Services <FaLongArrowAltRight /></button>
                        </div>
                    </div>
                </div>
            </div>
           


            </Slider>
        </div>
    );
}
export default Hero;
