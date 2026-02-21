import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const mentors = [
  {
    name: "Jhon Dwirian",
    role: "UI/UX Design",
    image: "/mentor-1.webp",
    company: "Grab",
  },
  {
    name: "Leon S Kennedy",
    role: "Machine Learning",
    image: "/mentor-2.webp",
    company: "Google",
  },
  {
    name: "Nguyễn Thuy",
    role: "Android Development",
    image: "/mentor-3.webp",
    company: "Airbnb",
  },
  {
    name: "Sarah Wilson",
    role: "Frontend Developer",
    image: "/mentor-4.webp",
    company: "Meta",
  },
];

const Mentors = () => {
  return (
    <section className="py-20 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Our Expert Mentors
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".mentor-next",
            prevEl: ".mentor-prev",
          }}
        //   pagination={{ clickable: true }}
        //   autoplay={{
        //     delay: 3500,
        //     disableOnInteraction: false,
        //   }}
pagination={{
  el: ".mentor-pagination",
  clickable: true,
}}        
          loop={true}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {mentors.map((mentor, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition duration-500 group">

                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {mentor.name}
                </h3>

                <p className="text-gray-500 mt-1">
                  {mentor.role}
                </p>

                <p className="text-sm text-gray-400 mt-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                </p>

                <p className="mt-6 font-semibold text-teal-600">
                  {mentor.company}
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        {/* <div className="flex justify-end gap-4 mt-8">
          <button className="mentor-prev w-12 h-12 rounded-full bg-white shadow hover:bg-teal-600 hover:text-white transition">
            ←
          </button>
          <button className="mentor-next w-12 h-12 rounded-full bg-white shadow hover:bg-teal-600 hover:text-white transition">
            →
          </button>
        </div> */}


        {/* Bottom Controls (Left Side) */}
<div className="flex items-center gap-6 mt-8">

  {/* Dots */}
  <div className="mentor-pagination"></div>

  {/* Arrows */}
  <div className="flex gap-4">
    <button className="mentor-prev w-12 h-12 rounded-full bg-white shadow  hover:bg-teal-600 hover:text-white transition">
      ←
    </button>

    <button className="mentor-next w-12 h-12 rounded-full bg-white shadow hover:bg-teal-600 hover:text-white transition">
      →
    </button>
  </div>

</div>

      </div>
    </section>
  );
};

export default Mentors;