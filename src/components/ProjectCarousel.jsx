import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const ProjectCarousel = ({imageList}) => {

    return (
        <div className="w-full max-w-2xl mx-auto my-10 p-6  rounded-xl shadow-lg border-[#705158]/30 border">
            <h2 className="text-2xl font-bold text-center mb-4 text-[#9c737c]">Preview</h2>
            <Swiper
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="rounded-xl"
                style={{
                    "--swiper-theme-color": "#9c737c", // Sets theme color for arrows & bullets
                    "--swiper-pagination-color": "#9c737c",  // Changes active bullet color
                    "--swiper-pagination-bullet-inactive-color": "#d9b3b8", // Inactive dots color
                    "--swiper-pagination-bullet-inactive-opacity": "0.5", // Make inactive dots more faded
                    "--swiper-navigation-color": "#9c737c", // Changes arrow color
                    paddingBottom:"40px",
                }}
            >
                {imageList.map((img, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
                        <img
                            src={img}
                            alt={`Project ${index + 1}`}
                            className="rounded-lg object-cover w-100 h-64 "

                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProjectCarousel;