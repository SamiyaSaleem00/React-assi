// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const testimonials = [
//     {
//         name: "Ashley Graham",
//         role: "Back-End Developer",
//         text: "Detailed learning materials that helped me grow professionally.",
//         caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         image: "/1.webp",
//     },
//     {
//         name: "John Carter",
//         role: "UI Designer",
//         text: "Amazing UI/UX course structure and real-world projects.",
//         caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         image: "/2.webp",
//     },
//     {
//         name: "Emma Watson",
//         role: "Frontend Developer",
//         text: "Best learning experience with practical implementation.",
//         caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         image: "/3.webp",
//     },
//     {
//         name: "Michael Lee",
//         role: "Mobile Developer",
//         text: "Flexible study time and strong mentor support.",
//         caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         image: "/4.webp",
//     },
//     {
//         name: "Sophia Khan",
//         role: "Software Engineer",
//         text: "Affordable and high-quality system design training.",
//         caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         image: "/5.webp",
//     },
// ];

// const Testimonial = () => {
//     return (
//         <section className="py-20 bg-gray-50">
//             <div className="max-w-7xl mx-auto px-6">

//                 <div className="flex flex-col lg:flex-row items-center gap-16">

//                     {/* LEFT CONTENT */}
//                     <div className="w-full lg:w-1/2">

//                         <h2 className="text-3xl md:text-5xl font-bold leading-tight">
//                             Testimonial What our{" "}
//                             <span className="text-teal-600 relative inline-block">
//                                 Students
//                                 <img
//                                     src="./headline-curve.svg"
//                                     alt="underline"
//                                     className="absolute left-0 -bottom-6 w-full"
//                                 />
//                             </span>{" "}
//                             Say
//                         </h2>
// <br></br><br></br>
//                         <Swiper
//                             modules={[Navigation, Autoplay, Pagination]}
//                             navigation
//                             pagination={{ clickable: true }}
//                             autoplay={{
//                                 delay: 4000,
//                                 disableOnInteraction: false,
//                             }}
//                             loop={true}
//                             spaceBetween={30}
//                             className="mt-10"
//                         >
//                             {testimonials.map((item, index) => (
//                                 <SwiperSlide key={index}>

//                                     <h4 className="text-lg font-semibold">
//                                         Detailed learning materials
//                                     </h4>
//                                     <p className="text-sm text-gray-500 mt-2">{item.caption}</p>

//                                     <div className="flex items-center gap-4 mt-6 bg-gray-100 p-4 rounded-xl shadow-sm w-fit">
//                                         <img
//                                             src={item.image}
//                                             alt={item.name}
//                                             className="w-12 h-12 rounded-full object-cover"
//                                         />
//                                         <div>
//                                             <h5 className="font-semibold">
//                                                 {item.name}
//                                             </h5>
//                                             <p className="text-sm text-gray-500">
//                                                 {item.role}
//                                             </p>
//                                         </div>
//                                     </div>

//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>

//                     </div>

//                     {/* RIGHT IMAGE */}
//                     <div className="w-full lg:w-1/2 flex justify-center relative">

//                         <div className="absolute w-72 h-72 md:w-96 md:h-96 
//             bg-yellow-200 rounded-[40%] -z-10"></div>

//                         <img
//                             src="/home-testimonial.webp"
//                             alt="student"
//                             className="w-72 md:w-96 object-contain"
//                         />

//                     </div>

//                 </div>

//             </div>
//         </section>
//     );
// };

// export default Testimonial;










import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Ashley Graham",
        role: "Back-End Developer",
        text: "Detailed learning materials that helped me grow professionally.",
        caption: "lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/1.webp",
    },
    {
        name: "John Carter",
        role: "UI Designer",
        text: "Amazing UI/UX course structure and real-world projects.",
        caption: "lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/2.webp",
    },
    {
        name: "Emma Watson",
        role: "Frontend Developer",
        text: "Best learning experience with practical implementation.",
        caption: "lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/3.webp",
    },
    {
        name: "Michael Lee",
        role: "Mobile Developer",
        text: "Flexible study time and strong mentor support.",
        caption: "lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/4.webp",
    },
    {
        name: "Sophia Khan",
        role: "Software Engineer",
        text: "Affordable and high-quality system design training.",
        caption: "lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/5.webp",
    },
];

const Testimonial = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* LEFT CONTENT */}
                    <div className="w-full lg:w-1/2">

                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            Testimonial What our{" "}
                            <span className="text-teal-600 relative inline-block">
                                Students
                                <img
                                    src="./headline-curve.svg"
                                    alt="underline"
                                    className="absolute left-0 -bottom-6 w-full"
                                />
                            </span>{" "}
                            Say
                        </h2>
<br></br><br></br>
                        <Swiper
                            modules={[Navigation, Autoplay, Pagination]}
                            navigation={{
                                nextEl: ".custom-next",
                                prevEl: ".custom-prev",
                            }}
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            spaceBetween={30}
                            className="mt-10"
                        >
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={index}>

                                    <h4 className="text-lg font-semibold">
                                        Detailed learning materials
                                    </h4>

                                    <p className="text-sm text-gray-500 mt-2">
                                        {item.caption}
                                    </p>

                                    <div className="flex items-center gap-4 mt-6 bg-gray-100 p-4 rounded-xl shadow-sm w-fit">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h5 className="font-semibold">
                                                {item.name}
                                            </h5>
                                            <p className="text-sm text-gray-500">
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/*CUSTOM ARROWS  */}
                        <div className="flex gap-4 mt-6">
                            <button className="custom-prev w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-teal-600 hover:text-white transition duration-300">
                                ←
                            </button>

                            <button className="custom-next w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-teal-600 hover:text-white transition duration-300">
                                →
                            </button>
                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-full lg:w-1/2 flex justify-center relative">

                        <div className="absolute w-72 h-72 md:w-96 md:h-96 
                        bg-yellow-200 rounded-[40%] -z-10"></div>

                        <img
                            src="/home-testimonial.webp"
                            alt="student"
                            className="w-72 md:w-96 object-contain"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Testimonial;