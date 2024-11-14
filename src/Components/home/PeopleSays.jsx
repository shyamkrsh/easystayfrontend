import React, { useRef } from "react";
import Slider from "react-slick";
import itemIcons from "./itemIconsData";
import shyam from '../../assets/images/shyam.jpg'

function PeopleSays() {
    let sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768, // screen width below 768px
                settings: {
                    slidesToShow: 1, // show only 1 slide
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024, // screen width below 1024px
                settings: {
                    slidesToShow: 2, // show 2 slides on medium screens
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <h1 className="text-[2rem] md:text-[3rem] font-bold text-center mt-8">People Says</h1>
            <div className="slider-container mt-12 mb-8">
                <Slider ref={slider => (sliderRef = slider)} {...settings}>

                    <div className="">
                        <div className="text-center px-10">
                            <img src={shyam} className="w-[80px] mx-auto rounded-full" />
                            <p className="text-slate-600 mt-5 text-justify">“When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.”</p>
                            <p className="mt-3"> - sonu kumar</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-center px-10">
                            <img src={shyam} className="w-[80px] mx-auto rounded-full"  />
                            <p className="text-slate-600 mt-5">“When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.”</p>
                            <p className="mt-3"> - sonu kumar</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-center px-10">
                            <img src={shyam} className="w-[80px] mx-auto rounded-full"  />
                            <p className="text-slate-600 mt-5">“When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.”</p>
                            <p className="mt-3"> - sonu kumar</p>
                        </div>
                    </div>


                </Slider >
            </div >

        </>

    )
}

export default PeopleSays;